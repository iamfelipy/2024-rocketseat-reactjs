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
  const [tempRating, setTempRating] = useState(1)

  const handleStarClick = (newRating: number) => {
    if (onRatingChange) {
      onRatingChange(newRating)
    }
  }

  const displayRating = tempRating > 0 ? tempRating : rating

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
