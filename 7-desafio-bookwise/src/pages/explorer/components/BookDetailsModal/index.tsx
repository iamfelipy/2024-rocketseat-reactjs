import {
  BookCardContainer,
  BookDetailsContainer,
  BookStats,
  CloseButton,
  Content,
  Overlay,
  StatItem,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, BookmarkSimple, X } from 'phosphor-react'
import BookCard from '@/components/BookCard'
import { RatingsSection } from './components/RatingsSection'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import dayjs from 'dayjs'

interface Book {
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
    all: Array<{
      id: string
      rate: number
      description: string
      created_at: string
      user: {
        id: string
        name: string
        avatar_url: string
      }
    }>
  }
}

// Para simular o usuário logado, mude o id para 'user-1' ou 'user-2' para testar a edição
const currentUserMock = {
  id: 'cristofer-rosser',
  name: 'Cristofer Rosser',
  avatarUrl: '/images/avatar-3.jpg',
}

type BookDetailsModalProps = {
  bookId: string
}

export function BookDetailsModal({ bookId }: BookDetailsModalProps) {
  // Em um app real, useSession() do NextAuth retornaria o usuário.
  // Para este exemplo, vamos simular a sessão.
  const session = { data: { user: currentUserMock }, status: 'authenticated' }
  const isLoggedIn = session.status === 'authenticated'

  const {
    data: book,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['book', bookId],
    queryFn: async (): Promise<Book> => {
      const response = await api.get(`/books/${bookId}`)
      return response.data
    },
    enabled: !!bookId,
  })

  if (isLoading) {
    return (
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            Carregando...
          </div>
        </Content>
      </Dialog.Portal>
    )
  }

  if (error || !book) {
    return (
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            Erro ao carregar o livro
          </div>
        </Content>
      </Dialog.Portal>
    )
  }

  // Transformar dados da API para o formato esperado pelo RatingsSection
  const transformedRatings = book.ratings.all.map((rating) => ({
    id: rating.id,
    rating: rating.rate,
    comment: rating.description,
    date: dayjs(rating.created_at).fromNow(),
    user: {
      id: rating.user.id,
      name: rating.user.name,
      avatarUrl: rating.user.avatar_url,
    },
  }))

  // Transformar categorias para string
  const categoriesString = book.categories.map((cat) => cat.name).join(', ')

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <BookDetailsContainer>
          <BookCardContainer>
            <BookCard
              css={{ padding: 0, margin: 0 }}
              imageWidth={108}
              imageHeight={152}
              book={{
                id: book.id,
                title: book.name,
                author: { id: 'author-id', name: book.author },
                imageUrl: book.cover_url,
                rating: book.ratings.average,
              }}
              reviewCount={book.ratings.total}
              showRating
              isRead={true}
            />
          </BookCardContainer>

          <BookStats>
            <StatItem>
              <BookmarkSimple size={24} />
              <div>
                <span>Categoria</span>
                <strong>{categoriesString}</strong>
              </div>
            </StatItem>
            <StatItem>
              <BookOpen size={24} />
              <div>
                <span>Páginas</span>
                <strong>{book.total_pages}</strong>
              </div>
            </StatItem>
          </BookStats>
        </BookDetailsContainer>

        <RatingsSection
          ratings={transformedRatings}
          isLoggedIn={isLoggedIn}
          currentUserId={session.data?.user?.id}
          currentUser={session.data?.user}
        />
      </Content>
    </Dialog.Portal>
  )
}
