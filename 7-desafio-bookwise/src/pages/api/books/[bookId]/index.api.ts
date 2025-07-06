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
    const { bookId } = req.query

    if (!bookId || typeof bookId !== 'string') {
      return res.status(400).json({ message: 'Book ID is required' })
    }

    const book = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
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
        },
      },
    })

    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }

    // Calculate rating statistics
    const totalRatings = book.ratings.length
    const averageRating =
      totalRatings > 0
        ? Math.round(
            book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
              totalRatings,
          )
        : 0

    // Get all ratings
    const allRatings = book.ratings.map((rating) => ({
      id: rating.id,
      rate: rating.rate,
      description: rating.description,
      created_at: rating.created_at.toISOString(),
      user: {
        id: rating.user.id,
        name: rating.user.name,
        avatar_url: rating.user.avatar_url,
      },
    }))

    const formattedBook = {
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
        all: allRatings,
      },
    }

    return res.status(200).json(formattedBook)
  } catch (error) {
    console.error('Error fetching book:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
