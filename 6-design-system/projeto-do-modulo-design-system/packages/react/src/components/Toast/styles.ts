import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})
export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '6px',
  padding: '$3 $5',
  boxShadow: '0 0 0 2px $colors$gray600',

  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '0.9375rem',
  alignItems: 'center',
})
export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',
})
export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
})
export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
  backgroundColor: 'transparent',
  border: 'none',
  alignSelf: 'start',
  height: '$5',
  width: '$5',
  '& > svg': {
    color: '$gray200',
    height: '$5',
    width: '$5',
  },
})
export const ToastClose = styled(Toast.Close, {})
export const ToastViewport = styled(Toast.Viewport, {
  '--viewport-padding': '2rem',
  position: 'fixed',
  bottom: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--viewport-padding)',
  gap: '10px',
  width: '24.375rem',
  maxWidth: '100vw',
  margin: '0',
  listStyle: 'none',
  zIndex: '2147483647',
  outline: 'none',
})
