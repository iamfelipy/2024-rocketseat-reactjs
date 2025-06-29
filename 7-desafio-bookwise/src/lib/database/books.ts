import { prisma } from '@/lib/prisma'

export async function getBooksFromDatabase({
  category,
  search,
}: {
  category?: string
  search?: string
}) {
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

  return books.map((book) => {
    const averageRating =
      book.ratings.length > 0
        ? Math.round(
            book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
              book.ratings.length,
          )
        : 0

    return {
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      created_at: book.created_at.toISOString(),
      categories: book.categories.map((cat) => cat.category),
      average_rating: Math.round(averageRating * 10) / 10,
      ratings_count: book.ratings.length,
    }
  })
}
