import { Avatar } from '@/components/Avatar'
import StarRating from '@/components/StarRating'
import { Check, X } from 'phosphor-react'
import {
  ActionButton,
  ActionsContainer,
  FormHeader,
  RatingFormContainer,
  TextAreaContainer,
  UserInfo,
} from './styles'
import { useState } from 'react'

const user = {
  name: 'Cristofer Rosser',
  avatarUrl: '/images/avatar-1.jpg',
}

const MAX_RATING_LENGTH = 450

type RatingFormProps = {
  onCancel: () => void
  onSave: (rating: number, comment: string) => void
  initialRating?: number
  initialComment?: string
}

export function RatingForm({
  onCancel,
  onSave,
  initialRating = 0,
  initialComment = '',
}: RatingFormProps) {
  const [rating, setRating] = useState(initialRating)
  const [comment, setComment] = useState(initialComment)

  const commentLength = comment.length

  const handleSave = () => {
    onSave(rating, comment)
  }

  return (
    <RatingFormContainer as="form">
      <FormHeader>
        <UserInfo>
          <Avatar src={user.avatarUrl} alt={user.name} width={40} height={40} />
          <span>{user.name}</span>
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
        <ActionButton onClick={onCancel}>
          <X size={24} />
        </ActionButton>
        <ActionButton onClick={handleSave}>
          <Check size={24} />
        </ActionButton>
      </ActionsContainer>
    </RatingFormContainer>
  )
}
