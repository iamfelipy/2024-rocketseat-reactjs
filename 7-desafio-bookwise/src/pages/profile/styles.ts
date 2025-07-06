import { Wrapper } from '@/components/SectionWithHeader/styles'
import { styled } from '@/styles'

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginBottom: '2.5rem',

  '@media (max-width: 480px)': {
    marginBottom: '$10',
  },
})

export const SearchInputContainer = styled('div', {
  width: '100%',
})

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

export const RecentReviewsList = styled('div', {
  '& > section > div:last-child > div ~ div': {
    marginTop: '$3',
  },
  [`${Wrapper} > div:first-child`]: {
    marginBottom: '$2',
  },
  [`${Wrapper} > div:first-child > h2`]: {
    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const BackButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  color: '$gray200',
  transition: 'color 0.2s',

  '&:hover': {
    color: '$gray100',
  },

  svg: {
    verticalAlign: 'middle',
    marginRight: '0.75rem',
    color: '$gray200',
  },

  span: {
    fontSize: '$xl',
    fontWeight: '500',
    verticalAlign: 'middle',
  },
})
