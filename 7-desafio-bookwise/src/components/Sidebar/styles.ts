import { styled } from '@/styles'

export const Wrapper = styled('aside', {
  padding: '$5',
  maxHeight: '61.75rem',
  height: '100%',
})

export const Container = styled('div', {
  width: '232px',
  position: 'relative',

  padding: '$10 3rem $6',
  borderRadius: '12px',
  backgroundImage: `linear-gradient(105deg, $green200, $purple200, $gray800)`,
  maxHeight: '61.75rem',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',

  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    pointerEvents: 'none',
    zIndex: 1,
  },

  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
})
