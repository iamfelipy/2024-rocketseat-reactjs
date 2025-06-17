import { styled } from '@/styles'

export const HeaderContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '2rem',
})

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const UserText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const UserName = styled('span', {
  color: '$gray100',
  fontWeight: '$regular',
  fontSize: '1rem',
  lineHeight: '$base',
})

export const UserDate = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const RatingContainer = styled('div', {
  alignSelf: 'flex-start',
})
