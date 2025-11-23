import { prisma } from '@/lib/prisma'

// Types
export interface UserProfile {
  id: string
  name: string
  avatarUrl: string | null
  createdAt: string
  stats: {
    totalReviews: number
    totalPages: number
    averageRating: number
    mostReadAuthor: string
  }
}

export interface UserReview {
  id: string
  title: string
  author: { id: string; name: string }
  imageUrl: string
  rating: number
  createdAt: string
  descriptionBottom: string
}

export interface GetUserProfileOptions {
  userId: string
}

export interface GetUserReviewsOptions {
  userId: string
  search?: string
}

// Service functions
export async function getUserProfile({
  userId,
}: GetUserProfileOptions): Promise<UserProfile> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      ratings: {
        include: {
          book: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  // Calculate user statistics
  const totalReviews = user.ratings.length
  const totalPages = user.ratings.reduce(
    (acc, rating) => acc + rating.book.total_pages,
    0,
  )
  const averageRating =
    totalReviews > 0
      ? user.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
        totalReviews
      : 0

  // Get most read author
  const authorCounts = user.ratings.reduce((acc, rating) => {
    const author = rating.book.author
    acc[author] = (acc[author] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const mostReadAuthor =
    Object.entries(authorCounts).sort(([, a], [, b]) => b - a)[0]?.[0] || 'N/A'

  return {
    id: user.id,
    name: user.name,
    avatarUrl: user.avatar_url,
    createdAt: user.created_at.toISOString(),
    stats: {
      totalReviews,
      totalPages,
      averageRating: Math.round(averageRating * 10) / 10,
      mostReadAuthor,
    },
  }
}

export async function getUserReviews({
  userId,
  search,
}: GetUserReviewsOptions): Promise<UserReview[]> {
  // Check if user exists
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })

  if (!user) {
    throw new Error('User not found')
  }

  // Build where clause for ratings
  const whereClause: any = {
    user_id: userId,
  }

  // Add search filter if provided
  if (search) {
    whereClause.book = {
      OR: [
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
      ],
    }
  }

  const reviews = await prisma.rating.findMany({
    where: whereClause,
    include: {
      book: true,
      user: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  return reviews.map((review) => ({
    id: review.id,
    title: review.book.name,
    author: { id: '', name: review.book.author },
    imageUrl: review.book.cover_url,
    rating: review.rate,
    createdAt: review.created_at.toISOString(),
    descriptionBottom: review.description,
  }))
}
