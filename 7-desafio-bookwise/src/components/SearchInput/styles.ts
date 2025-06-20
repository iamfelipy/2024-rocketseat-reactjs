import { styled } from '@/styles'

export const IconContainer = styled('div', {
  position: 'absolute',
  top: '50%',
  right: '1.25rem',
  transform: 'translateY(-50%)',
  color: '$gray500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const SearchInputContainer = styled('div', {
  position: 'relative',
  width: '100%',

  '&:focus-within': {
    [`> ${IconContainer}`]: {
      color: '$green200',
    },
  },
})

export const Input = styled('input', {
  width: '100%',
  padding: '0.875rem 2.5rem 0.875rem 1.25rem',
  borderRadius: '4px',
  border: '1px solid $gray500',
  backgroundColor: '$gray800',
  color: '$gray200',
  fontSize: '$sm',

  '&::placeholder': {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  '&:focus': {
    outline: 'none',
    borderColor: '$green200',
  },
})
