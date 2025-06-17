import { styled } from '@/styles'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Main = styled('main', {})

export const RecentReviewsList = styled('div', {
  '& > section > div:last-child > div ~ div': {
    marginTop: '$3',
  },
})
