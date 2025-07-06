import { NextApiRequest, NextApiResponse } from 'next'
import { getUserReviews } from '@/services/users.service'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { userId, search } = req.query

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ message: 'Missing or invalid userId' })
  }

  try {
    const reviews = await getUserReviews({ userId, search: search as string })
    return res.status(200).json(reviews)
  } catch (error) {
    console.error('Error fetching user reviews:', error)

    if (error instanceof Error && error.message === 'User not found') {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.status(500).json({ message: 'Internal server error' })
  }
}
