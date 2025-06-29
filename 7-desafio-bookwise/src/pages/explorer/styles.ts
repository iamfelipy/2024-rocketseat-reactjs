import { styled } from '@/styles'

export const ExplorerContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '3.375rem',

  '& > *:nth-child(2)': {
    width: 433,

    '@media (max-width: 1024px)': {
      width: '100%',
    },
  },

  '@media (max-width: 1024px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '$3',
    marginBottom: '1rem',
    '& > *': {
      marginBottom: '1rem',

      width: '100%',
    },
  },
})

export const PageTitle = styled('h1', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  fontSize: '$2xl',
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray100',

  svg: {
    color: '$green100',
  },
})

export const TagsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  marginBottom: '3rem',
})

export const Tag = styled('button', {
  background: 'none',
  border: '1px solid $purple100',
  color: '$purple100',
  padding: '$1 $4',
  borderRadius: '$full',
  transition: '0.2s',
  minHeight: '2.125rem',
  '&:hover': {
    background: '$purple200',
    color: '$gray100',
    borderColor: '$purple200',
  },
  '&[data-active="true"]': {
    background: '$purple200',
    color: '$gray100',
    borderColor: '$purple200',
  },
})

export const BooksGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '$5',
})
