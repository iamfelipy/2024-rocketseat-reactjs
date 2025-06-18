import { styled } from '@/styles'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Main = styled('main', {})

export const PageTitle = styled('h1', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '$10',

  fontSize: '$2xl',
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray100',

  svg: {
    color: '$green100',
  },
})

export const LastReadBook = styled('div', {
  marginBottom: '$10',
})

export const RecentReviewsList = styled('div', {
  '& > section > div:last-child > div ~ div': {
    marginTop: '$3',
  },
})
