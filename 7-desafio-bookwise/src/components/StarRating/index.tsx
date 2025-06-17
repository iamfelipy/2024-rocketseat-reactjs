import React from 'react'
import { StarRatingContainer, Star } from './styles'
import { Star as StarIcon } from 'phosphor-react'

interface StarRatingProps {
  rating: number
  css?: any
}

export default function StarRating({ rating, css }: StarRatingProps) {
  return (
    <StarRatingContainer css={css}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i}>
          <StarIcon weight={i <= rating ? 'fill' : 'regular'} size={16} />
        </Star>
      ))}
    </StarRatingContainer>
  )
}
