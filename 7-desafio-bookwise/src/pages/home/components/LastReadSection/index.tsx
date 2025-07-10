import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import BookCard from '@/components/BookCard'
import { SectionWithHeader } from '@/components/SectionWithHeader'
import { LastReadBook } from './styles'
import { useSession } from 'next-auth/react'

interface LastRead {
  id: string
  title: string
  author: {
    id: string
    name: string
  }
  imageUrl: string
  rating: number
  createdAt: string
  description: string
}

export function LastReadSection() {
  const { data: session, status } = useSession()
  const userId = session?.user?.id
  const isAuthenticated = status === 'authenticated'

  const {
    data: lastRead,
    isLoading,
    error,
  } = useQuery<LastRead | null>({
    queryKey: ['last-read', userId],
    queryFn: async () => {
      const response = await api.get(`/users/${userId}/last-read`)
      return response.data
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  })

  // Don't render if user is not authenticated
  if (!isAuthenticated) {
    return null
  }

  if (isLoading) {
    return <div>Carregando última leitura...</div>
  }

  if (error || !lastRead) {
    return null
  }

  return (
    <LastReadBook>
      <SectionWithHeader
        title="Sua última leitura"
        actionText="Ver todos"
        actionHref={`/profile/${userId}`}
      >
        <BookCard
          css={{
            padding: '$6',
            backgroundColor: '$gray600',
          }}
          imageWidth={108}
          imageHeight={152}
          book={{
            id: lastRead.id,
            title: lastRead.title,
            author: lastRead.author,
            imageUrl: lastRead.imageUrl,
            rating: lastRead.rating,
          }}
          createdAt={new Date(lastRead.createdAt)}
          showDateAndRating
          priority
          description={lastRead.description}
        />
      </SectionWithHeader>
    </LastReadBook>
  )
}
