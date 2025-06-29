import React, { useState } from 'react'
import { Star } from 'phosphor-react'
import { StarContainer } from './styles'

type StarRatingProps = {
  rating: number
  css?: any
  onRatingChange?: (rating: number) => void
  size?: 'sm' | 'md' | 'lg'
}

export default function StarRating({
  rating,
  onRatingChange,
  size = 'md',
  css,
}: StarRatingProps) {
  const [tempRating, setTempRating] = useState(0)

  const handleStarClick = (newRating: number) => {
    if (onRatingChange) {
      onRatingChange(newRating)
    }
  }

  // Normalize rating: ensure it's an integer between 0 and 5
  const normalizedRating = Math.max(
    0,
    Math.min(5, Math.round(Number(rating) || 0)),
  )

  const displayRating = tempRating > 0 ? tempRating : normalizedRating

  return (
    <StarContainer
      size={size}
      css={css}
      onMouseLeave={onRatingChange ? () => setTempRating(0) : undefined}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          weight={i <= displayRating ? 'fill' : 'regular'}
          onClick={() => handleStarClick(i)}
          onMouseEnter={onRatingChange ? () => setTempRating(i) : undefined}
          style={{ cursor: onRatingChange ? 'pointer' : 'default' }}
        />
      ))}
    </StarContainer>
  )
}
