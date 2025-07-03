import React, { useState, forwardRef } from 'react'
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
  ReadBadge,
  BookImageContainer,
} from './styles'
import StarRating from '../StarRating'
import { BookCardHeader } from './components/BookCardHeader'
import dayjs from 'dayjs'

interface Book {
  id: string
  title: string
  author: {
    id: string
    name: string
  }
  imageUrl: string
  rating: number
}

interface BookCardProps {
  book: Book
  user?: { id: string; name: string; avatarUrl: string }
  createdAt?: Date
  description?: string
  descriptionBottom?: string
  reviewCount?: number
  imageWidth: number
  imageHeight: number
  showRating?: boolean
  showBookCardHeader?: boolean
  showDateAndRating?: boolean
  isRead?: boolean
  css?: any
  onClick?: () => void
  priority?: boolean
}

const MAX_DESCRIPTION_LENGTH = 228

const BookCard = forwardRef<HTMLDivElement, BookCardProps>(
  (
    {
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
      isRead,
      css,
      priority = false,
      ...props
    },
    ref,
  ) => {
    const [expanded, setExpanded] = useState(false)

    let descToShow = description
    let isTruncated = false
    if (
      description &&
      description.length > MAX_DESCRIPTION_LENGTH &&
      !expanded
    ) {
      descToShow = description.slice(0, MAX_DESCRIPTION_LENGTH)
      isTruncated = true
    }

    const handleSeeMore = () => {
      setExpanded(true)
    }

    const relativeDate = createdAt ? dayjs(createdAt).fromNow() : null

    return (
      <CardContainer ref={ref} css={css} {...props}>
        {isRead && <ReadBadge>LIDO</ReadBadge>}
        {showBookCardHeader && user && relativeDate && (
          <BookCardHeader
            user={user}
            date={relativeDate}
            rating={book.rating}
          />
        )}
        <BookContent>
          <BookImageContainer
            css={{
              width: imageWidth,
              height: imageHeight,
            }}
          >
            <BookImage
              src={book.imageUrl}
              alt={book.title}
              fill
              loading={priority ? undefined : 'lazy'}
              priority={priority}
              sizes={`${imageWidth}px`}
            />
          </BookImageContainer>
          <BookInfo>
            {showDateAndRating && (
              <DateAndRating>
                <span>{relativeDate}</span>
                <StarRating rating={book.rating} />
              </DateAndRating>
            )}
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author.name}</BookAuthor>
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
  },
)

BookCard.displayName = 'BookCard'

export default BookCard
