import { styled } from '@/styles'
import Image from 'next/image'

export const CardContainer = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  gap: '$5',
  backgroundColor: '$gray700',
  borderRadius: '$md',
  padding: '1.125rem 1.25rem',
})

export const BookImage = styled(Image, {
  objectFit: 'cover',
  borderRadius: '$sm',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  flex: 1,
  minWidth: 0,
  '& > *:last-child': {
    marginTop: 'auto',
  },
})

export const BookTitle = styled('strong', {
  color: '$gray100',
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$short',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const BookAuthor = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  lineHeight: '$base',
})
