import { styled } from '@/styles'

export const UserProfileInfoWrapper = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '$md',
  padding: '$8 $4',
  minWidth: 280,

  borderLeft: '1px solid $gray700',
})

export const UserName = styled('h2', {
  marginTop: '$5',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$short',
  color: '$gray100',
  textAlign: 'center',
})

export const MemberSince = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  marginBottom: '$8',
  lineHeight: '$base',
  textAlign: 'center',
})

export const Divider = styled('div', {
  width: '$8',
  height: '$1',
  margin: '0 auto',
  borderRadius: '$full',
  marginBottom: '3.25rem',
  backgroundImage: '$gradient-horizontal',
})

export const InfoList = styled('ul', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '$6',
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

export const InfoItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '$4',
  color: '$green100',

  width: '12.25rem',
  height: '2.8125rem',

  svg: {
    flexShrink: 0,
  },
})

export const InfoValue = styled('div', {
  fontSize: '$md',
  fontWeight: '$bold',
  color: '$gray200',
})

export const InfoLabel = styled('div', {
  fontSize: '$sm',
  color: '$gray300',
})

export const AccordionToggle = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  background: 'none',
  border: 'none',
  color: '$gray400',
  marginTop: '$2',
  marginBottom: '$5',
  cursor: 'pointer',
  transition: 'color 0.2s',
  fontSize: '$lg',

  '&:hover': {
    color: '$gray300',
  },

  '@media (min-width: 800px)': {
    display: 'none',
  },
})

export const AccordionContent = styled('div', {
  width: '100%',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease',
  maxHeight: 0,
  opacity: 0,
  pointerEvents: 'none',

  '&[data-open="true"]': {
    maxHeight: 1000,
    opacity: 1,
    pointerEvents: 'auto',
  },

  '@media (min-width: 800px)': {
    maxHeight: 'none',
    opacity: 1,
    pointerEvents: 'auto',
    transition: 'none',
    display: 'block',
  },
})

export const AccordionContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
})
