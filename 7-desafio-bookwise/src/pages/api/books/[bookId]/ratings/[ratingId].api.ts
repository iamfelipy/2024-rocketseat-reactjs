import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const querySchema = z.object({
    bookId: z.string().min(1, 'Book ID is required'),
    ratingId: z.string().min(1, 'Rating ID is required'),
  })

  const queryValidation = querySchema.safeParse(req.query)

  if (!queryValidation.success) {
    return res.status(400).json({
      message: queryValidation.error.errors[0].message,
    })
  }

  const { bookId, ratingId } = queryValidation.data

  switch (req.method) {
    case 'GET':
      return handleGetRating(req, res, bookId, ratingId)
    case 'PUT':
      return handleUpdateRating(req, res, bookId, ratingId)
    case 'DELETE':
      return handleDeleteRating(req, res, bookId, ratingId)
    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}

async function handleGetRating(
  req: NextApiRequest,
  res: NextApiResponse,
  bookId: string,
  ratingId: string,
) {
  try {
    const rating = await prisma.rating.findFirst({
      where: {
        id: ratingId,
        book_id: bookId,
      },
      include: {
        user: true,
      },
    })

    if (!rating) {
      return res.status(404).json({ message: 'Rating not found' })
    }

    return res.status(200).json({
      id: rating.id,
      rate: rating.rate,
      description: rating.description,
      created_at: rating.created_at.toISOString(),
      user: {
        id: rating.user.id,
        name: rating.user.name,
        avatar_url: rating.user.avatar_url,
      },
    })
  } catch (error) {
    console.error('Error fetching rating:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

async function handleUpdateRating(
  req: NextApiRequest,
  res: NextApiResponse,
  bookId: string,
  ratingId: string,
) {
  try {
    const updateRatingSchema = z.object({
      rate: z
        .number()
        .min(1, 'Rate must be at least 1')
        .max(5, 'Rate must be at most 5'),
      description: z.string().min(1, 'Description is required').trim(),
    })

    const bodyValidation = updateRatingSchema.safeParse(req.body)

    if (!bodyValidation.success) {
      return res.status(400).json({
        message: bodyValidation.error.errors[0].message,
      })
    }

    const { rate, description } = bodyValidation.data

    const existingRating = await prisma.rating.findFirst({
      where: {
        id: ratingId,
        book_id: bookId,
      },
    })

    if (!existingRating) {
      return res.status(404).json({ message: 'Rating not found' })
    }

    const updatedRating = await prisma.rating.update({
      where: {
        id: ratingId,
      },
      data: {
        rate,
        description: description.trim(),
      },
      include: {
        user: true,
      },
    })

    return res.status(200).json({
      id: updatedRating.id,
      rate: updatedRating.rate,
      description: updatedRating.description,
      created_at: updatedRating.created_at.toISOString(),
      user: {
        id: updatedRating.user.id,
        name: updatedRating.user.name,
        avatar_url: updatedRating.user.avatar_url,
      },
    })
  } catch (error) {
    console.error('Error updating rating:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

async function handleDeleteRating(
  req: NextApiRequest,
  res: NextApiResponse,
  bookId: string,
  ratingId: string,
) {
  try {
    const existingRating = await prisma.rating.findFirst({
      where: {
        id: ratingId,
        book_id: bookId,
      },
    })

    if (!existingRating) {
      return res.status(404).json({ message: 'Rating not found' })
    }

    await prisma.rating.delete({
      where: {
        id: ratingId,
      },
    })

    return res.status(204).end()
  } catch (error) {
    console.error('Error deleting rating:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
