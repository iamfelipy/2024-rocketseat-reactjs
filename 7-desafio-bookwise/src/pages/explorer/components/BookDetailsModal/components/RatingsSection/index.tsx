import { Avatar } from '@/components/Avatar'
import StarRating from '@/components/StarRating'
import { LinkButton } from '@/components/LinkButton'
import { Check, X } from 'phosphor-react'
import Link from 'next/link'
import { useState } from 'react'
import {
  RatingsSectionContainer,
  RatingsHeader,
  RatingCard,
  RatingHeader,
  UserInfoContainer,
  UserDetails,
  RatingFormContainer,
  FormHeader,
  UserInfo,
  TextAreaContainer,
  ActionsContainer,
  ActionButton,
} from './styles'

interface Rating {
  id: string
  rating: number
  comment: string
  date: string
  user: {
    id: string
    name: string
    avatarUrl: string
  }
}

interface RatingsSectionProps {
  ratings: Rating[]
}

const MAX_RATING_LENGTH = 450

export function RatingsSection({ ratings }: RatingsSectionProps) {
  const [showRatingForm, setShowRatingForm] = useState(false)
  const [editingRatingId, setEditingRatingId] = useState<string | null>(null)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  // Mock session - em um app real seria useSession() do NextAuth
  const session = {
    data: {
      user: {
        id: '6624df61-5947-4f8c-9c7e-39c8c40fa158',
        name: 'Jaylon Franci',
        avatarUrl:
          'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
    },
    status: 'authenticated',
  }

  const isLoggedIn = session.status === 'authenticated'
  const authenticatedUser = session.data?.user

  const userRating = ratings.find((r) => r.user.id === authenticatedUser?.id)
  const hasUserRated = !!userRating

  const isRatingFormVisible = showRatingForm || editingRatingId !== null

  const handleRateClick = () => {
    if (hasUserRated && userRating) {
      setEditingRatingId(userRating.id)
      setRating(userRating.rating)
      setComment(userRating.comment)
    } else {
      setShowRatingForm(true)
      setRating(0)
      setComment('')
    }
  }

  const handleCancel = () => {
    setShowRatingForm(false)
    setEditingRatingId(null)
    setRating(0)
    setComment('')
  }

  const handleSave = () => {
    // TODO: Implement save logic
    console.log('Saving rating:', { rating, comment, editingRatingId })
    handleCancel()
  }

  const commentLength = comment.length

  // Sort ratings to show user's rating first
  const sortedRatings = [...ratings].sort((a, b) => {
    if (a.user.id === authenticatedUser?.id) return -1
    if (b.user.id === authenticatedUser?.id) return 1
    return 0
  })

  return (
    <RatingsSectionContainer>
      <RatingsHeader>
        <h3>Avaliações</h3>
        {isLoggedIn && !isRatingFormVisible && (
          <LinkButton asButton onClick={handleRateClick}>
            {hasUserRated ? 'Editar avaliação' : 'Avaliar'}
          </LinkButton>
        )}
      </RatingsHeader>

      {showRatingForm && (
        <RatingFormContainer as="form">
          <FormHeader>
            <UserInfo>
              <Avatar
                src={authenticatedUser?.avatarUrl || ''}
                alt={authenticatedUser?.name || ''}
                width={40}
                height={40}
              />
              <span>{authenticatedUser?.name || ''}</span>
            </UserInfo>
            <StarRating rating={rating} onRatingChange={setRating} />
          </FormHeader>
          <TextAreaContainer>
            <textarea
              placeholder="Escreva sua avaliação"
              maxLength={MAX_RATING_LENGTH}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <span>{`${commentLength}/${MAX_RATING_LENGTH}`}</span>
          </TextAreaContainer>
          <ActionsContainer>
            <ActionButton onClick={handleCancel}>
              <X size={24} />
            </ActionButton>
            <ActionButton onClick={handleSave}>
              <Check size={24} />
            </ActionButton>
          </ActionsContainer>
        </RatingFormContainer>
      )}

      {sortedRatings.map((ratingItem) => {
        if (editingRatingId === ratingItem.id) {
          return (
            <RatingFormContainer key={ratingItem.id} as="form">
              <FormHeader>
                <UserInfo>
                  <Avatar
                    src={authenticatedUser?.avatarUrl || ''}
                    alt={authenticatedUser?.name || ''}
                    width={40}
                    height={40}
                  />
                  <span>{authenticatedUser?.name || ''}</span>
                </UserInfo>
                <StarRating rating={rating} onRatingChange={setRating} />
              </FormHeader>
              <TextAreaContainer>
                <textarea
                  placeholder="Escreva sua avaliação"
                  maxLength={MAX_RATING_LENGTH}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <span>{`${commentLength}/${MAX_RATING_LENGTH}`}</span>
              </TextAreaContainer>
              <ActionsContainer>
                <ActionButton onClick={handleCancel}>
                  <X size={24} />
                </ActionButton>
                <ActionButton onClick={handleSave}>
                  <Check size={24} />
                </ActionButton>
              </ActionsContainer>
            </RatingFormContainer>
          )
        }
        return (
          <RatingCard
            key={ratingItem.id}
            onClick={() => {
              if (ratingItem.user.id === authenticatedUser?.id) {
                setEditingRatingId(ratingItem.id)
                setRating(ratingItem.rating)
                setComment(ratingItem.comment)
              }
            }}
            isUserRating={ratingItem.user.id === authenticatedUser?.id}
          >
            <RatingHeader>
              <Link
                href={`/profile/${ratingItem.user.id}`}
                prefetch={false}
                style={{ textDecoration: 'none' }}
              >
                <UserInfoContainer>
                  <Avatar
                    src={ratingItem.user.avatarUrl}
                    alt={ratingItem.user.name}
                    width={40}
                    height={40}
                  />
                  <UserDetails>
                    <strong>{ratingItem.user.name}</strong>
                    <span>{ratingItem.date}</span>
                  </UserDetails>
                </UserInfoContainer>
              </Link>
              <StarRating rating={ratingItem.rating} />
            </RatingHeader>
            <p>{ratingItem.comment}</p>
          </RatingCard>
        )
      })}
    </RatingsSectionContainer>
  )
}
