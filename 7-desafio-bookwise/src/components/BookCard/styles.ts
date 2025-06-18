import { styled } from '@/styles'
import Image from 'next/image'
import { HeaderContainer } from './components/BookCardHeader/styles'
import { StarRatingContainer } from '../StarRating/styles'

export const BookContent = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  gap: '$5',
})

export const BookImage = styled(Image, {
  objectFit: 'cover',
  borderRadius: '$sm',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
})

export const DateAndRating = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$3',
  gap: '$2',
  '& > span:first-child': {
    color: '$gray300',
    fontSize: '$sm',
  },
})

export const BookTitle = styled('div', {
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray100',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})

export const BookAuthor = styled('div', {
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray400',
})

export const ReviewCount = styled('div', {
  fontSize: '0.8125rem',
  color: '$purple100',
})

export const Description = styled('div', {
  fontSize: '$sm',
  color: '$gray300',
  lineHeight: '$base',
  marginTop: '$5',
})

export const DescriptionBottomComponent = styled('div', {
  fontSize: '$sm',
  color: '$gray300',
  lineHeight: '$base',
})

export const SeeMoreButton = styled('button', {
  color: '$purple100',
  fontSize: '$sm',
  cursor: 'pointer',
  fontWeight: '$bold',
})

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray700',
  borderRadius: '$md',
  padding: '1.125rem 1.25rem',

  '@media (max-width: 1200px)': {
    [`> ${HeaderContainer}`]: {
      display: 'block',
      marginBottom: '$3',
      [`${StarRatingContainer}`]: {
        marginTop: '$2',
      },
    },
    [`> ${BookContent}`]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',

      [`> ${BookImage}`]: {
        margin: '0 auto',

        objectFit: 'cover',
      },
    },
  },
})
