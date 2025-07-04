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
    const reviews = await prisma.rating.findMany({
      orderBy: { created_at: 'desc' },
      take: 50,
      include: {
        user: true,
        book: true,
      },
    })

    const uniqueBookReviews = reviews
      .reduce((acc, review) => {
        if (!acc.find((r) => r.book.id === review.book.id)) {
          acc.push(review)
        }
        return acc
      }, [] as typeof reviews)
      .slice(0, 10)

    const formatted = uniqueBookReviews.map((review) => ({
      id: review.id,
      description: review.description,
      createdAt: review.created_at,
      user: {
        id: review.user.id,
        name: review.user.name,
        avatarUrl: review.user.avatar_url,
      },
      book: {
        id: review.book.id,
        title: review.book.name,
        author: { id: '', name: review.book.author },
        imageUrl: review.book.cover_url,
        rating: review.rate,
      },
    }))

    return res.status(200).json(formatted)
  } catch (error) {
    console.error('Error fetching recent reviews:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
