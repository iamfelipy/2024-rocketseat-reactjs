import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: 'rgba(14, 17, 22, 0.6)',
  zIndex: 20,
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 516,
  background: '$gray700',
  borderRadius: '$lg',
  padding: '3.5rem',
  textAlign: 'center',
  zIndex: 21,

  h2: {
    fontSize: '$md',
    color: '$gray200',
    marginBottom: '2.5rem',
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  color: '$gray400',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  lineHeight: 0,
})

export const LoginButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  width: '100%',
  padding: '1.25rem 1.5rem',
  background: '$gray600',
  border: 'none',
  borderRadius: '$md',
  color: '$gray200',
  fontSize: '$lg',
  fontWeight: '$bold',
  cursor: 'pointer',
  transition: 'background 0.2s',
  marginBottom: '1rem',

  '&:hover': {
    background: '$gray500',
  },
})
