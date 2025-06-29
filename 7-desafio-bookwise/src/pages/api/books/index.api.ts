import { NextApiRequest, NextApiResponse } from 'next'
import { getBooksFromDatabase } from '@/lib/database/books'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { category, search } = req.query
    const books = await getBooksFromDatabase({
      category: typeof category === 'string' ? category : undefined,
      search: typeof search === 'string' ? search : undefined,
    })
    return res.status(200).json(books)
  } catch (error) {
    console.error('Error fetching books:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
