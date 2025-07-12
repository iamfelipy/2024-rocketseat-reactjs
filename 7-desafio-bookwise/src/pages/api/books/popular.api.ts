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
    const books = await prisma.book.findMany({
      include: {
        ratings: true,
      },
    })

    const booksWithRatings = books.map((book) => {
      const totalRatings = book.ratings.length
      const averageRating =
        totalRatings > 0
          ? book.ratings.reduce((acc, r) => acc + r.rate, 0) / totalRatings
          : 0
      return {
        id: book.id,
        title: book.name,
        author: book.author,
        imageUrl: book.cover_url,
        rating: Math.round(averageRating),
        ratingsCount: totalRatings,
      }
    })

    booksWithRatings.sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating
      return b.ratingsCount - a.ratingsCount
    })

    return res.status(200).json(booksWithRatings.slice(0, 4))
  } catch (error) {
    console.error('Error fetching popular books:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
