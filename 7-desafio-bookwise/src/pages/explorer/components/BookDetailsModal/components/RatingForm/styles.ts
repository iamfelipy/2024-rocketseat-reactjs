import { styled } from '@/styles'

export const RatingFormContainer = styled('div', {
  background: '$gray700',
  padding: '1.5rem',
  borderRadius: '$md',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: '1rem',
})

export const FormHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  '@media (max-width: 425px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  span: {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray100',
  },
})

export const TextAreaContainer = styled('div', {
  position: 'relative',
  width: '100%',

  textarea: {
    width: '100%',
    height: 164,
    background: '$gray800',
    border: '1px solid $gray500',
    borderRadius: '4px',
    padding: '0.875rem 1.25rem',
    color: '$gray200',
    fontSize: '$sm',
    resize: 'none',

    '&:focus': {
      outline: 'none',
      borderColor: '$green200',
    },

    '&::placeholder': {
      color: '$gray400',
    },
  },

  span: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    fontSize: '$xs',
    color: '$gray400',
  },
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.5rem',
})

export const ActionButton = styled('button', {
  width: 40,
  height: 40,
  background: '$gray600',
  border: 'none',
  borderRadius: '$sm',
  color: '$purple100',
  cursor: 'pointer',
  lineHeight: 0,
  transition: 'background 0.2s',

  '&:hover': {
    background: '$gray500',
  },

  '&:last-of-type': {
    color: '$green100',
  },
})
