import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    return handleGetRatings(req, res)
  }

  if (req.method === 'POST') {
    return handleCreateRating(req, res)
  }

  return res.status(405).json({ message: 'Method not allowed' })
}

// GET /api/ratings - Buscar avaliações com filtros
async function handleGetRatings(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      orderBy = 'created_at',
      order = 'desc',
      limit = '10',
      page = '1',
      bookId,
      userId,
    } = req.query

    // Validar parâmetros
    const limitNum = Math.min(parseInt(limit as string) || 10, 50) // Máximo 50
    const pageNum = parseInt(page as string) || 1
    const skip = (pageNum - 1) * limitNum

    // Construir where clause
    const whereClause: any = {}

    if (bookId) {
      whereClause.book_id = bookId as string
    }

    if (userId) {
      whereClause.user_id = userId as string
    }

    // Validar orderBy
    const validOrderBy = ['created_at', 'rate', 'book_name']
    const orderByField = validOrderBy.includes(orderBy as string)
      ? orderBy
      : 'created_at'

    // Validar order
    const orderDirection = order === 'asc' ? 'asc' : 'desc'

    // Construir orderBy
    const orderByClause: any = {}

    if (orderByField === 'book_name') {
      orderByClause.book = {
        name: orderDirection,
      }
    } else {
      orderByClause[orderByField] = orderDirection
    }

    const [ratings, total] = await Promise.all([
      prisma.rating.findMany({
        where: whereClause,
        include: {
          book: {
            select: {
              id: true,
              name: true,
              author: true,
              cover_url: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              avatar_url: true,
            },
          },
        },
        orderBy: orderByClause,
        skip,
        take: limitNum,
      }),
      prisma.rating.count({ where: whereClause }),
    ])

    const totalPages = Math.ceil(total / limitNum)

    const formattedRatings = ratings.map((rating) => ({
      id: rating.id,
      rate: rating.rate,
      description: rating.description,
      created_at: rating.created_at,
      book: {
        id: rating.book.id,
        name: rating.book.name,
        author: rating.book.author,
        cover_url: rating.book.cover_url,
      },
      user: {
        id: rating.user.id,
        name: rating.user.name,
        avatar_url: rating.user.avatar_url,
      },
    }))

    return res.status(200).json({
      ratings: formattedRatings,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages,
        hasNext: pageNum < totalPages,
        hasPrev: pageNum > 1,
      },
    })
  } catch (error) {
    console.error('Error fetching ratings:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// POST /api/ratings - Criar nova avaliação
async function handleCreateRating(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { bookId, userId, rate, description } = req.body

    // Validações
    if (!bookId || !userId || !rate || !description) {
      return res.status(400).json({
        message: 'bookId, userId, rate, and description are required',
      })
    }

    if (rate < 1 || rate > 5) {
      return res.status(400).json({
        message: 'Rate must be between 1 and 5',
      })
    }

    if (description.length < 10) {
      return res.status(400).json({
        message: 'Description must be at least 10 characters long',
      })
    }

    // Verificar se o livro existe
    const book = await prisma.book.findUnique({
      where: { id: bookId },
    })

    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }

    // Verificar se o usuário existe
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Verificar se o usuário já avaliou este livro
    const existingRating = await prisma.rating.findFirst({
      where: {
        book_id: bookId,
        user_id: userId,
      },
    })

    if (existingRating) {
      return res.status(409).json({
        message: 'User has already rated this book',
      })
    }

    // Criar a avaliação
    const rating = await prisma.rating.create({
      data: {
        rate,
        description,
        book_id: bookId,
        user_id: userId,
      },
      include: {
        book: {
          select: {
            id: true,
            name: true,
            author: true,
            cover_url: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            avatar_url: true,
          },
        },
      },
    })

    const formattedRating = {
      id: rating.id,
      rate: rating.rate,
      description: rating.description,
      created_at: rating.created_at,
      book: {
        id: rating.book.id,
        name: rating.book.name,
        author: rating.book.author,
        cover_url: rating.book.cover_url,
      },
      user: {
        id: rating.user.id,
        name: rating.user.name,
        avatar_url: rating.user.avatar_url,
      },
    }

    return res.status(201).json(formattedRating)
  } catch (error) {
    console.error('Error creating rating:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
