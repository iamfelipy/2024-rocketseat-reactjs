import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
// eslint-disable-next-line camelcase
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session?.user?.id) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    const userId = session.user.id

    const createRatingSchema = z.object({
      rate: z
        .number()
        .min(1, 'Rate must be at least 1')
        .max(5, 'Rate must be at most 5'),
      description: z
        .string()
        .min(1, 'Description is required')
        .max(450, 'Description too long'),
    })

    const bodyValidation = createRatingSchema.safeParse(req.body)

    if (!bodyValidation.success) {
      return res.status(400).json({
        message: bodyValidation.error.errors[0].message,
      })
    }

    const { rate, description } = bodyValidation.data
    const { bookId } = req.query

    // Check if user already rated this book
    const existingRating = await prisma.rating.findFirst({
      where: {
        book_id: bookId as string,
        user_id: userId,
      },
    })

    if (existingRating) {
      return res.status(409).json({ message: 'User already rated this book' })
    }

    const newRating = await prisma.rating.create({
      data: {
        rate,
        description: description.trim(),
        book_id: bookId as string,
        user_id: userId,
      },
      include: {
        user: true,
      },
    })

    return res.status(201).json({
      id: newRating.id,
      rate: newRating.rate,
      description: newRating.description,
      created_at: newRating.created_at.toISOString(),
      user: {
        id: newRating.user.id,
        name: newRating.user.name,
        avatar_url: newRating.user.avatar_url,
      },
    })
  } catch (error) {
    console.error('Error creating rating:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
