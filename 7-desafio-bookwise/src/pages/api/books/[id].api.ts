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
    const { id } = req.query

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ message: 'Book ID is required' })
    }

    const book = await prisma.book.findUnique({
      where: { id },
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
          orderBy: {
            created_at: 'desc',
          },
          take: 5, // Limita a 5 avaliações mais recentes
        },
      },
    })

    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }

    // Calcular rating para o livro (sistema de 5 estrelas)
    const totalRatings = book.ratings.length

    // Calcular média das avaliações (0-5 estrelas)
    const averageRating =
      totalRatings > 0
        ? book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
          totalRatings
        : 0

    // Arredondar para 1 casa decimal e limitar entre 0-5
    const roundedRating = Math.min(
      5,
      Math.max(0, Math.round(averageRating * 10) / 10),
    )

    // Pegar a imagem do autor através do primeiro rating (ou usar fallback)
    const authorImage =
      totalRatings > 0 ? book.ratings[0].user.avatar_url : null

    const bookWithRating = {
      id: book.id,
      name: book.name,
      author: book.author,
      author_image: authorImage,
      summary: book.summary,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      created_at: book.created_at,
      categories: book.categories.map((cat) => cat.category),
      rating: {
        average: roundedRating,
        count: totalRatings,
      },
      recent_ratings: book.ratings.map((rating) => ({
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        created_at: rating.created_at,
        user: {
          id: rating.user.id,
          name: rating.user.name,
          avatar_url: rating.user.avatar_url,
        },
      })),
    }

    return res.status(200).json(bookWithRating)
  } catch (error) {
    console.error('Error fetching book:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
