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
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, BookmarkSimple, X } from 'phosphor-react'
import StarRating from '@/components/StarRating'
import { Avatar } from '@/components/Avatar'
import { LinkButton } from '@/components/LinkButton'
import { useState } from 'react'
import { LoginModal } from '../LoginModal'
import { RatingForm } from './components/RatingForm'
import BookCard from '@/components/BookCard'

// Mock data
const book = {
  title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
  author: 'Zeno Rocha',
  imageUrl: '/images/book-habitos.png',
  rating: 4,
  totalPages: 160,
  category: 'Computação, educação',
  ratings: [
    {
      id: 1,
      user: { name: 'Brandon Botosh', avatarUrl: '/images/avatar-1.jpg' },
      date: 'Há 2 dias',
      rating: 4,
      comment:
        'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibu...',
    },
    {
      id: 2,
      user: { name: 'Jaylon Franci', avatarUrl: '/images/avatar-2.jpg' },
      date: 'Há 4 meses',
      rating: 5,
      comment: 'Nec tempor nunc in egestas.',
    },
  ],
}

// Configuração de autenticação - mude para false para testar o LoginModal
const IS_AUTHENTICATED = false

type BookDetailsModalProps = {
  bookId: string
}

export function BookDetailsModal({ bookId }: BookDetailsModalProps) {
  // TODO: Fetch real data using bookId
  const [showRatingForm, setShowRatingForm] = useState(false)

  // TODO: Replace with real authentication data
  const isLoggedIn = IS_AUTHENTICATED
  const hasUserRated = false // Assume user has not rated yet

  const handleRate = () => {
    setShowRatingForm(true)
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
                id: 4,
                title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
                author: 'Zeno Rocha',
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
            {isLoggedIn ? (
              !hasUserRated &&
              !showRatingForm && (
                <LinkButton asButton onClick={handleRate}>
                  Avaliar
                </LinkButton>
              )
            ) : (
              <LoginModal>
                <LinkButton asButton>Avaliar</LinkButton>
              </LoginModal>
            )}
          </div>

          {showRatingForm && (
            <RatingForm
              onCancel={() => setShowRatingForm(false)}
              onSave={() => {
                // TODO: Implement save logic
                setShowRatingForm(false)
              }}
            />
          )}

          {book.ratings.map((rating) => (
            <RatingCard key={rating.id}>
              <header style={{ display: 'flex', gap: '1rem' }}>
                <Avatar
                  src={rating.user.avatarUrl}
                  alt={rating.user.name}
                  width={40}
                  height={40}
                />
                <div style={{ flex: 1 }}>
                  <strong>{rating.user.name}</strong>
                  <span style={{ color: '#8D95AF' }}>{rating.date}</span>
                </div>
                <StarRating rating={rating.rating} />
              </header>
              <p>{rating.comment}</p>
            </RatingCard>
          ))}
        </RatingsSection>
      </Content>
    </Dialog.Portal>
  )
}
