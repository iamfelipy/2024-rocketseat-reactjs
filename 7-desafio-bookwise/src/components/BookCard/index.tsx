import React from 'react'
import {
  CardContainer,
  BookImage,
  BookInfo,
  BookTitle,
  BookAuthor,
} from './styles'
import StarRating from '../StarRating'

interface Book {
  id: number
  title: string
  author: string
  imageUrl: string
  rating: number
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <CardContainer>
      <BookImage width="64" height="94" src={book.imageUrl} alt={book.title} />
      <BookInfo>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>
        <StarRating rating={book.rating} />
      </BookInfo>
    </CardContainer>
  )
}
