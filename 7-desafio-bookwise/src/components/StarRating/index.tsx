import React from 'react'
import { StarRatingContainer, Star } from './styles'
import { Star as StarIcon } from 'phosphor-react'

interface StarRatingProps {
  rating: number
}

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <StarRatingContainer>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i}>
          <StarIcon weight={i <= rating ? 'fill' : 'regular'} size={16} />
        </Star>
      ))}
    </StarRatingContainer>
  )
}
