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

    if (category && category !== 'all') {
      whereClause.categories = {
        some: {
          category: {
            name: category,
          },
        },
      }
    }

    if (search) {
      whereClause.OR = [
        {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          author: {
            contains: search,
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

    const formattedBooks = books.map((book) => {
      const totalRatings = book.ratings.length
      const averageRating =
        totalRatings > 0
          ? Math.round(
              book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
                totalRatings,
            )
          : 0

      return {
        id: book.id,
        name: book.name,
        author: book.author,
        summary: book.summary,
        cover_url: book.cover_url,
        total_pages: book.total_pages,
        created_at: book.created_at.toISOString(),
        categories: book.categories.map((cat) => cat.category),
        ratings: {
          average: Math.round(averageRating * 10) / 10,
          total: totalRatings,
        },
      }
    })

    return res.status(200).json(formattedBooks)
  } catch (error) {
    console.error('Error fetching books:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
