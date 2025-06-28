import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { category, search } = req.query

    const whereClause: any = {}

    // Filtro por categoria
    if (category && category !== 'all') {
      whereClause.categories = {
        some: {
          category: {
            name: category as string,
          },
        },
      }
    }

    // Busca por texto (nome do livro ou autor)
    if (search) {
      whereClause.OR = [
        {
          name: {
            contains: search as string,
            mode: 'insensitive',
          },
        },
        {
          author: {
            contains: search as string,
            mode: 'insensitive',
          },
        },
      ]
    }

    const books = await prisma.book.findMany({
      where: whereClause,
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        ratings: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    })

    // Calcular média das avaliações para cada livro
    const booksWithAverageRating = books.map((book) => {
      const averageRating =
        book.ratings.length > 0
          ? book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
            book.ratings.length
          : 0

      return {
        id: book.id,
        name: book.name,
        author: book.author,
        summary: book.summary,
        cover_url: book.cover_url,
        total_pages: book.total_pages,
        created_at: book.created_at,
        categories: book.categories.map((cat) => cat.category),
        average_rating: Math.round(averageRating * 10) / 10,
        ratings_count: book.ratings.length,
      }
    })

    return res.status(200).json(booksWithAverageRating)
  } catch (error) {
    console.error('Error fetching books:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
