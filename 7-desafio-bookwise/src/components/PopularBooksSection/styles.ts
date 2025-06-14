import { styled } from '@/styles'

export const SectionContainer = styled('section', {
  backgroundColor: '$gray900',
  borderRadius: '$md',
})

export const SectionHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',
  '& > span': {
    color: '$gray100',
    fontSize: '$sm',
  },
})

export const BooksList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
