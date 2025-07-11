import AppLayout3Cols from '@/layouts/AppLayout3Cols'
import Sidebar from '@/components/Sidebar'
import { UserProfileInfo } from '@/components/UserProfileInfo'
import { User, CaretLeft } from 'phosphor-react'
import Main from '@/components/Main'
import { SectionWithHeader } from '@/components/SectionWithHeader'
import BookCard from '@/components/BookCard'
import {
  BackButtonContainer,
  Header,
  PageTitle,
  RecentReviewsList,
  SearchInputContainer,
} from '@/pages/profile/styles'
import dayjs from 'dayjs'
import { SearchInput } from '@/components/SearchInput'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { getUserProfileWithReviews } from '@/services/users.service'
import type {
  UserReview as Review,
  UserProfile as Profile,
} from '@/services/users.service'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'

export default function ProfilePage({
  initialReviews = [],
  profile,
}: {
  initialReviews: Review[]
  profile: Profile
}) {
  const router = useRouter()
  const { data: session } = useSession()
  const initialSearch = (router.query.search as string) || ''
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const userId = router?.query?.userId as string

  // Update URL when search query changes
  useEffect(() => {
    const query: Record<string, string> = {}
    if (searchQuery) query.search = searchQuery

    // Determine the correct pathname based on whether we're viewing own or other's profile
    const pathname = `/profile/${userId}`
    router.replace(
      {
        pathname,
        query,
      },
      undefined,
      { shallow: true },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  // Query for reviews with React Query
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ['reviews', userId, searchQuery],
    queryFn: async () => {
      const searchParams = new URLSearchParams()
      if (searchQuery) {
        searchParams.append('search', searchQuery)
      }
      const response = await api.get(
        `/users/${userId}/reviews?${searchParams.toString()}`,
      )
      return response.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!userId,
    initialData: initialReviews,
  })

  const reviewsExist = reviews && reviews.length > 0

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  // Helper function to get appropriate message
  const getEmptyStateMessage = () => {
    const hasSearchQuery = searchQuery.trim().length > 0
    const hasInitialReviews = initialReviews.length > 0
    const isOwnProfile = session?.user?.id === userId

    if (hasSearchQuery) {
      return `Nenhuma avaliação encontrada para "${searchQuery}".`
    }

    if (!hasInitialReviews) {
      return isOwnProfile
        ? 'Você ainda não fez nenhuma avaliação.'
        : 'Este usuário ainda não fez nenhuma avaliação.'
    }

    return 'Nenhuma avaliação encontrada.'
  }

  return (
    <AppLayout3Cols
      left={<Sidebar />}
      right={<UserProfileInfo profile={profile} />}
    >
      <Main>
        <Header>
          <PageTitle>
            {session?.user?.id === userId ? (
              <>
                <User size={32} weight="bold" />
                {'Perfil'}
              </>
            ) : (
              <BackButtonContainer onClick={handleGoBack}>
                <CaretLeft size={20} weight="bold" />
                <span>Voltar</span>
              </BackButtonContainer>
            )}
          </PageTitle>
          <SearchInputContainer>
            <SearchInput
              placeholder="Buscar livro avaliado"
              defaultValue={searchQuery}
              onSearch={setSearchQuery}
            />
          </SearchInputContainer>
        </Header>
        <RecentReviewsList>
          {isLoading && <p>Buscando avaliações...</p>}
          {!isLoading &&
            reviewsExist &&
            reviews.map((review) => (
              <SectionWithHeader
                key={review.id}
                title={dayjs(review.createdAt).fromNow()}
              >
                <BookCard
                  css={{
                    padding: '$6',
                    marginBottom: '1rem',
                  }}
                  imageWidth={108}
                  imageHeight={152}
                  book={{
                    id: String(review.id),
                    title: review.title,
                    author: {
                      id: String(review.author.id),
                      name: review.author.name,
                    },
                    imageUrl: review.imageUrl,
                    rating: review.rating,
                  }}
                  createdAt={new Date(review.createdAt)}
                  showRating
                  descriptionBottom={review.descriptionBottom}
                />
              </SectionWithHeader>
            ))}
          {!isLoading && !reviewsExist && <p>{getEmptyStateMessage()}</p>}
        </RecentReviewsList>
      </Main>
    </AppLayout3Cols>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { search = '', userId = '' } = context.query

  if (!userId) {
    return {
      notFound: true,
    }
  }

  userId = String(userId)
  search = String(search)
  try {
    const { profile, reviews } = await getUserProfileWithReviews(
      userId,
      search as string,
    )

    return {
      props: {
        profile,
        initialReviews: reviews,
      },
    }
  } catch (error) {
    console.error('Error in getServerSideProps:', error)

    return {
      notFound: true,
    }
  }
}
