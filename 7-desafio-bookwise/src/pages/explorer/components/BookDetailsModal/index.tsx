import {
  BookCardContainer,
  BookDetailsContainer,
  BookStats,
  CloseButton,
  Content,
  Overlay,
  RatingCard,
  RatingsSection,
  StatItem,
  RatingHeader,
  UserDetails,
  UserInfoContainer,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, BookmarkSimple, X } from 'phosphor-react'
import StarRating from '@/components/StarRating'
import { Avatar } from '@/components/Avatar'
import { LinkButton } from '@/components/LinkButton'
import { useState } from 'react'
import { RatingForm } from './components/RatingForm'
import BookCard from '@/components/BookCard'
import Link from 'next/link'

// Mock data
const book = {
  id: 'mock-book-id',
  title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
  author: { id: 'zeno-rocha', name: 'Zeno Rocha' },
  imageUrl: '/images/book-habitos.png',
  rating: 4,
  totalPages: 160,
  category: 'Computação, educação',
  ratings: [
    {
      id: '1',
      user: {
        id: 'brandon-botosh',
        name: 'Brandon Botosh',
        avatarUrl: '/images/avatar-1.jpg',
      },
      date: 'Há 2 dias',
      rating: 4,
      comment:
        'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibu...',
    },
    {
      id: '2',
      user: {
        id: 'jaylon-franci',
        name: 'Jaylon Franci',
        avatarUrl: '/images/avatar-2.jpg',
      },
      date: 'Há 4 meses',
      rating: 5,
      comment: 'Nec tempor nunc in egestas.',
    },
  ],
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
  const [showRatingForm, setShowRatingForm] = useState(false)
  const [editingRatingId, setEditingRatingId] = useState<string | null>(null)

  // Em um app real, useSession() do NextAuth retornaria o usuário.
  // Para este exemplo, vamos simular a sessão.
  const session = { data: { user: currentUserMock }, status: 'authenticated' }
  const isLoggedIn = session.status === 'authenticated'

  const userRating = book.ratings.find(
    (r) => r.user.id === session.data?.user?.id,
  )
  const hasUserRated = !!userRating

  const isRatingFormVisible = showRatingForm || editingRatingId !== null

  const handleRateClick = () => {
    if (hasUserRated && userRating) {
      setEditingRatingId(userRating.id)
    } else {
      setShowRatingForm(true)
    }
  }

  const handleCancel = () => {
    setShowRatingForm(false)
    setEditingRatingId(null)
  }

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
                id: 'mock-book-id',
                title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
                author: { id: 'zeno-rocha', name: 'Zeno Rocha' },
                imageUrl: '/images/book-habitos.png',
                rating: 4,
              }}
              reviewCount={3}
              showRating
              isRead={true}
            />
          </BookCardContainer>

          <BookStats>
            <StatItem>
              <BookmarkSimple size={24} />
              <div>
                <span>Categoria</span>
                <strong>{book.category}</strong>
              </div>
            </StatItem>
            <StatItem>
              <BookOpen size={24} />
              <div>
                <span>Páginas</span>
                <strong>{book.totalPages}</strong>
              </div>
            </StatItem>
          </BookStats>
        </BookDetailsContainer>

        <RatingsSection>
          <div>
            <h3>Avaliações</h3>
            {isLoggedIn && !isRatingFormVisible && (
              <LinkButton asButton onClick={handleRateClick}>
                {hasUserRated ? 'Editar avaliação' : 'Avaliar'}
              </LinkButton>
            )}
          </div>

          {showRatingForm && (
            <RatingForm
              onCancel={handleCancel}
              onSave={() => {
                // TODO: Implement save logic for new rating
                handleCancel()
              }}
            />
          )}

          {book.ratings.map((rating) => {
            if (editingRatingId === rating.id) {
              return (
                <RatingForm
                  key={rating.id}
                  initialComment={rating.comment}
                  initialRating={rating.rating}
                  onCancel={handleCancel}
                  onSave={() => {
                    // TODO: Implement save logic for edited rating
                    handleCancel()
                  }}
                />
              )
            }
            return (
              <RatingCard
                key={rating.id}
                onClick={() => {
                  if (rating.user.id === session.data?.user?.id) {
                    setEditingRatingId(rating.id)
                  }
                }}
                isUserRating={rating.user.id === session.data?.user?.id}
              >
                <RatingHeader>
                  <Link
                    href={`/profile/${rating.user.id}`}
                    prefetch={false}
                    style={{ textDecoration: 'none' }}
                  >
                    <UserInfoContainer>
                      <Avatar
                        src={rating.user.avatarUrl}
                        alt={rating.user.name}
                        width={40}
                        height={40}
                      />
                      <UserDetails>
                        <strong>{rating.user.name}</strong>
                        <span>{rating.date}</span>
                      </UserDetails>
                    </UserInfoContainer>
                  </Link>
                  <StarRating rating={rating.rating} />
                </RatingHeader>
                <p>{rating.comment}</p>
              </RatingCard>
            )
          })}
        </RatingsSection>
      </Content>
    </Dialog.Portal>
  )
}
