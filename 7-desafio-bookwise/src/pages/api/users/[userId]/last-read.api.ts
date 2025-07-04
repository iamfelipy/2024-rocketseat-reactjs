import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { userId } = req.query
  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ message: 'Missing or invalid userId' })
  }

  try {
    const lastRead = await prisma.rating.findFirst({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      include: {
        book: true,
        user: true,
      },
    })

    if (!lastRead) {
      return res.status(404).json({ message: 'No recent reading found' })
    }

    const formatted = {
      id: lastRead.book.id,
      title: lastRead.book.name,
      author: { id: '', name: lastRead.book.author },
      imageUrl: lastRead.book.cover_url,
      rating: lastRead.rate,
      createdAt: lastRead.created_at,
      description: lastRead.description,
    }

    return res.status(200).json(formatted)
  } catch (error) {
    console.error('Error fetching last read:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
