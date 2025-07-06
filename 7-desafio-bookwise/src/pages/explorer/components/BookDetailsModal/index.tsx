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
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

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

type BookDetailsModalProps = {
  bookId: string
}

export function BookDetailsModal({ bookId }: BookDetailsModalProps) {
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
          <VisuallyHidden>
            <Dialog.Title>Carregando detalhes do livro</Dialog.Title>
            <Dialog.Description>
              Carregando informações do livro...
            </Dialog.Description>
          </VisuallyHidden>
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
          <VisuallyHidden>
            <Dialog.Title>Erro ao carregar detalhes do livro</Dialog.Title>
            <Dialog.Description>
              Ocorreu um erro ao carregar as informações do livro.
            </Dialog.Description>
          </VisuallyHidden>
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

  const categoriesString = book.categories.map((cat) => cat.name).join(', ')

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <VisuallyHidden>
          <Dialog.Title>
            Detalhes do livro: {book?.name || 'Carregando...'}
          </Dialog.Title>
          <Dialog.Description>
            Informações detalhadas sobre o livro {book?.name || 'carregando...'}
            , incluindo autor, páginas, categorias e avaliações.
          </Dialog.Description>
        </VisuallyHidden>
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

        <RatingsSection ratings={transformedRatings} bookId={bookId} />
      </Content>
    </Dialog.Portal>
  )
}
