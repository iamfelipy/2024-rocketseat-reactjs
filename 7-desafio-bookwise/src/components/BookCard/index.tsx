import React, { useState } from 'react'
import {
  CardContainer,
  BookContent,
  BookImage,
  BookInfo,
  BookTitle,
  BookAuthor,
  Description,
  ReviewCount,
  SeeMoreButton,
  DescriptionBottomComponent,
  DateAndRating,
} from './styles'
import StarRating from '../StarRating'
import { BookCardHeader } from './components/BookCardHeader'
import dayjs from 'dayjs'

interface Book {
  id: number
  title: string
  author: string
  imageUrl: string
  rating: number
}

interface BookCardProps {
  book: Book
  user?: { name: string; avatarUrl: string }
  createdAt?: Date
  description?: string
  descriptionBottom?: string
  reviewCount?: number
  imageWidth: number
  imageHeight: number
  showRating?: boolean
  showBookCardHeader?: boolean
  showDateAndRating?: boolean
}

const MAX_DESCRIPTION_LENGTH = 228

export default function BookCard({
  book,
  user,
  createdAt,
  description,
  descriptionBottom,
  reviewCount,
  imageWidth,
  imageHeight,
  showRating = false,
  showBookCardHeader,
  showDateAndRating,
}: BookCardProps) {
  const [expanded, setExpanded] = useState(false)

  let descToShow = description
  let isTruncated = false
  if (description && description.length > MAX_DESCRIPTION_LENGTH && !expanded) {
    descToShow = description.slice(0, MAX_DESCRIPTION_LENGTH)
    isTruncated = true
  }

  const handleSeeMore = () => {
    setExpanded(true)
  }

  const relativeDate = createdAt ? dayjs(createdAt).fromNow() : null

  return (
    <CardContainer>
      {showBookCardHeader && user && relativeDate && (
        <BookCardHeader user={user} date={relativeDate} rating={book.rating} />
      )}
      <BookContent>
        <BookImage
          src={book.imageUrl}
          alt={book.title}
          width={imageWidth}
          height={imageHeight}
        />
        <BookInfo>
          {showDateAndRating && (
            <DateAndRating>
              <span>{relativeDate}</span>
              <StarRating rating={book.rating} />
            </DateAndRating>
          )}
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
          {showRating && (
            <StarRating rating={book.rating} css={{ marginTop: 'auto' }} />
          )}
          {reviewCount && <ReviewCount>{reviewCount} avaliações</ReviewCount>}
          {description && (
            <Description>
              {descToShow}
              {isTruncated && !expanded && (
                <>
                  ...{' '}
                  <SeeMoreButton
                    as="span"
                    tabIndex={0}
                    role="button"
                    onClick={handleSeeMore}
                  >
                    ver mais
                  </SeeMoreButton>
                </>
              )}
            </Description>
          )}
        </BookInfo>
      </BookContent>
      {descriptionBottom && (
        <DescriptionBottomComponent style={{ marginTop: 16 }}>
          {descriptionBottom}
        </DescriptionBottomComponent>
      )}
    </CardContainer>
  )
}
