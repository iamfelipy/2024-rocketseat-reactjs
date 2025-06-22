import { BookImageContainer } from '@/components/BookCard/styles'
import { StarContainer } from '@/components/StarRating/styles'
import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: 'rgba(14, 17, 22, 0.6)',
  zIndex: 10,
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  maxWidth: 660,
  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px #00000080',
  padding: '3rem',
  paddingTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  zIndex: 11,

  '&::-webkit-scrollbar': {
    width: 6,
  },
  '&::-webkit-scrollbar-track': {
    background: '$gray700',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
  },

  '@media (max-width: 400px)': {
    padding: '1rem',
    paddingTop: '4rem',
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  color: '$gray400',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  lineHeight: 0,
})

export const BookDetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gray700',
  borderRadius: '$md',
  padding: '2.5rem 2rem',
})

export const BookCardContainer = styled('div', {
  marginBottom: '2.5rem',

  '@media (max-width: 1200px)': {
    marginBottom: '1rem',
    [`& ${BookImageContainer}`]: {
      marginBottom: '1rem',
    },
    [`& ${StarContainer}`]: {
      margin: '1rem 0',
    },
  },
})

export const BookStats = styled('div', {
  paddingTop: '1.5rem',
  borderTop: '1px solid $gray600',
  display: 'flex',
  gap: '3.5rem',
  flexWrap: 'wrap',
  '@media (max-width: 1200px)': {
    paddingTop: '1.5rem',
    gap: '1rem',
  },
})

export const StatItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  svg: {
    color: '$green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',

    span: {
      fontSize: '$sm',
      color: '$gray300',
      lineHeight: '$base',
    },
    strong: {
      fontSize: '$md',
      fontWeight: '$bold',
      color: '$gray200',
      lineHeight: '$short',
    },
  },
})

export const RatingsSection = styled('div', {
  marginTop: '2.5rem',
  '& > div:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    '& > h3': {
      fontSize: '$sm',
      color: '$gray200',
      fontWeight: '$base',
    },
  },
})

export const RatingCard = styled('div', {
  background: '$gray700',
  padding: '1.5rem',
  borderRadius: '$md',
  marginBottom: '0.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  p: {
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '$base',
  },

  variants: {
    isUserRating: {
      true: {
        background: '$gray600',
        cursor: 'pointer',
      },
    },
  },

  '@media (max-width: 425px)': {
    justifyContent: 'flex-start',
  },
})

export const RatingHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1rem',

  '@media (max-width: 425px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
})

export const UserInfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  '@media (max-width: 425px)': {
    marginBottom: '1rem',
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  strong: {
    color: '$gray100',
    lineHeight: '$short',
  },
  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})
