import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export interface BookWithRatings {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  categories: Array<{
    id: string
    name: string
  }>
  ratings: {
    average: number
    total: number
  }
}

// Zod schema for input validation
const GetBooksOptionsSchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
})

export type GetBooksOptions = z.infer<typeof GetBooksOptionsSchema>

export async function getBooks(
  options: GetBooksOptions = {},
): Promise<BookWithRatings[]> {
  // Validate input options
  const validatedOptions = GetBooksOptionsSchema.parse(options)
  const { category, search } = validatedOptions

  // Build where clause
  const whereClause: any = {}

  if (category && category !== 'all') {
    whereClause.categories = {
      some: {
        category: {
          name: category,
        },
      },
    }
  }

  if (search) {
    whereClause.OR = [
      {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
      {
        author: {
          contains: search,
          mode: 'insensitive',
        },
      },
    ]
  }

  // Fetch books from database
  const books = await prisma.book.findMany({
    where: whereClause,
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
      },
    },
    orderBy: {
      name: 'asc',
    },
  })

  // Process and format each book
  return books.map((book) => {
    // Calculate ratings internally
    const totalRatings = book.ratings.length
    const averageRating =
      totalRatings > 0
        ? Math.round(
            book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
              totalRatings,
          )
        : 0

    // Format book data
    return {
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
      },
    }
  })
}
