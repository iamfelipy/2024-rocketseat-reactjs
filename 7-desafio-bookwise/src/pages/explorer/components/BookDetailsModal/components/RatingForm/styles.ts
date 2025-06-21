import { styled } from '@/styles'

export const RatingFormContainer = styled('div', {
  background: '$gray700',
  padding: '1.5rem',
  borderRadius: '$md',
  marginTop: '1rem',
})

export const FormHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
})

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  span: {
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
    borderRadius: '$sm',
    padding: '0.875rem 1.25rem',
    color: '$gray200',
    fontSize: '$sm',
    resize: 'none',

    '&:focus': {
      outline: 'none',
      borderColor: '$green200',
    },
  },

  span: {
    position: 'absolute',
    bottom: '0.5rem',
    right: '0.5rem',
    fontSize: '$xs',
    color: '$gray400',
  },
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.5rem',
  marginTop: '0.75rem',
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

  '&:first-of-type': {
    color: '$purple100',
  },

  '&:last-of-type': {
    color: '$green100',
  },
})
