import { styled } from '@/styles'

export const Wrapper = styled('section', {
  backgroundColor: '$gray900',
  borderRadius: '$md',
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',
  '& > span': {
    color: '$gray100',
    fontSize: '$sm',
  },
})

export const Title = styled('h2', {
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray100',
})

export const ActionArea = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  color: '$purple100',
})
