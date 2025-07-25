import { Avatar } from '@/components/Avatar'
import StarRating from '@/components/StarRating'
import { LinkButton } from '@/components/LinkButton'
import { LoginModal } from '@/components/LoginModal'
import { Check, X, Trash } from 'phosphor-react'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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
import { useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'

const ratingFormSchema = z.object({
  rate: z.number().min(1, 'Selecione uma nota').max(5),
  description: z
    .string()
    .min(1, 'Escreva uma avaliação')
    .max(450, 'Máximo de 450 caracteres'),
})

type RatingFormData = z.infer<typeof ratingFormSchema>

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
  bookId: string
}

const MAX_RATING_LENGTH = 450

export function RatingsSection({ ratings, bookId }: RatingsSectionProps) {
  const [showRatingForm, setShowRatingForm] = useState(false)
  const [editingRatingId, setEditingRatingId] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<RatingFormData>({
    resolver: zodResolver(ratingFormSchema),
    defaultValues: {
      rate: 0,
      description: '',
    },
  })

  const watchedDescription = watch('description')
  const watchedRate = watch('rate')

  const { data: session, status } = useSession()
  const isLoggedIn = status === 'authenticated'
  const authenticatedUser = session?.user

  const userRating = ratings.find((r) => r.user.id === authenticatedUser?.id)
  const hasUserRated = !!userRating

  const isRatingFormVisible = showRatingForm || editingRatingId !== null

  const handleRateClick = () => {
    if (hasUserRated && userRating) {
      setEditingRatingId(userRating.id)
      setValue('rate', userRating.rating)
      setValue('description', userRating.comment)
    } else {
      setShowRatingForm(true)
      setValue('rate', 0)
      setValue('description', '')
    }
  }

  const handleCancel = () => {
    setShowRatingForm(false)
    setEditingRatingId(null)
    reset()
  }

  const handleDelete = async () => {
    if (!userRating?.id || !isLoggedIn) return

    try {
      setIsSubmitting(true)
      await api.delete(`/books/${bookId}/ratings/${userRating.id}`)

      queryClient.invalidateQueries({ queryKey: ['book', bookId] })
      handleCancel()
    } catch (error) {
      console.error('Error deleting rating:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const onSubmit = async (data: RatingFormData) => {
    if (!isLoggedIn) return

    try {
      setIsSubmitting(true)

      if (editingRatingId) {
        await api.put(`/books/${bookId}/ratings/${editingRatingId}`, {
          rate: data.rate,
          description: data.description,
        })
      } else {
        await api.post(`/books/${bookId}/ratings`, {
          rate: data.rate,
          description: data.description,
        })
      }

      queryClient.invalidateQueries({ queryKey: ['book', bookId] })
      handleCancel()
    } catch (error) {
      console.error('Error saving rating:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Memoize sorted ratings for better performance
  const sortedRatings = useMemo(() => {
    return [...ratings].sort((a, b) => {
      if (a.user.id === authenticatedUser?.id) return -1
      if (b.user.id === authenticatedUser?.id) return 1
      return 0
    })
  }, [ratings, authenticatedUser?.id])

  return (
    <RatingsSectionContainer>
      <RatingsHeader>
        <h3>Avaliações</h3>
        {!isRatingFormVisible &&
          (isLoggedIn ? (
            <LinkButton asButton onClick={handleRateClick}>
              {hasUserRated ? 'Editar avaliação' : 'Avaliar'}
            </LinkButton>
          ) : (
            <LoginModal isAuthenticated={isLoggedIn}>
              <LinkButton asButton>Avaliar</LinkButton>
            </LoginModal>
          ))}
      </RatingsHeader>

      {isRatingFormVisible && (
        <RatingFormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormHeader>
            <UserInfo>
              <Avatar
                src={authenticatedUser?.avatar_url || ''}
                alt={authenticatedUser?.name || ''}
                width={40}
                height={40}
              />
              <span>{authenticatedUser?.name || ''}</span>
            </UserInfo>
            <StarRating
              rating={watchedRate}
              onRatingChange={(rate) => setValue('rate', rate)}
            />
          </FormHeader>

          {errors.rate && (
            <span style={{ color: 'red', fontSize: '0.875rem' }}>
              {errors.rate.message}
            </span>
          )}

          <TextAreaContainer>
            <textarea
              {...register('description')}
              placeholder="Escreva sua avaliação"
              maxLength={MAX_RATING_LENGTH}
            />
            <span>{`${watchedDescription.length}/${MAX_RATING_LENGTH}`}</span>
          </TextAreaContainer>

          {errors.description && (
            <span style={{ color: 'red', fontSize: '0.875rem' }}>
              {errors.description.message}
            </span>
          )}

          <ActionsContainer>
            <ActionButton type="button" onClick={handleCancel}>
              <X size={24} />
            </ActionButton>

            {editingRatingId && (
              <ActionButton
                type="button"
                onClick={handleDelete}
                disabled={isSubmitting}
              >
                <Trash size={24} />
              </ActionButton>
            )}

            <ActionButton type="submit" disabled={isSubmitting}>
              <Check size={24} />
            </ActionButton>
          </ActionsContainer>
        </RatingFormContainer>
      )}

      {sortedRatings.map((ratingItem) => (
        <RatingCard key={ratingItem.id}>
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
      ))}
    </RatingsSectionContainer>
  )
}
