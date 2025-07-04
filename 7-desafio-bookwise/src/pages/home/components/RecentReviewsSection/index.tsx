import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import BookCard from '@/components/BookCard'
import { SectionWithHeader } from '@/components/SectionWithHeader'
import { RecentReviewsList } from './styles'

interface Review {
  id: string
  description: string
  createdAt: string
  user: {
    id: string
    name: string
    avatarUrl: string
  }
  book: {
    id: string
    title: string
    author: {
      id: string
      name: string
    }
    imageUrl: string
    rating: number
  }
}

export function RecentReviewsSection() {
  const { data: reviews = [], isLoading } = useQuery<Review[]>({
    queryKey: ['recent-reviews'],
    queryFn: async () => {
      const response = await api.get('/reviews/recent')
      return response.data
    },
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) {
    return <div>Carregando avaliações...</div>
  }

  return (
    <RecentReviewsList>
      <SectionWithHeader title="Avaliações mais recentes">
        {reviews.map((review) => (
          <BookCard
            key={review.id}
            css={{ padding: '$6' }}
            imageWidth={108}
            imageHeight={152}
            book={review.book}
            user={review.user}
            createdAt={new Date(review.createdAt)}
            description={review.description}
            showBookCardHeader
          />
        ))}
      </SectionWithHeader>
    </RecentReviewsList>
  )
}
