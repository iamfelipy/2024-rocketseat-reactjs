import { NextApiRequest, NextApiResponse } from 'next'
import { getCategoriesFromDatabase } from '@/lib/database/categories'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const categories = await getCategoriesFromDatabase()
    return res.status(200).json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
