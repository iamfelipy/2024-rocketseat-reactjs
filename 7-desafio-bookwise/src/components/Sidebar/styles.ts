import { styled } from '@/styles'

export const Wrapper = styled('aside', {
  padding: '$5',
  maxHeight: '61.75rem',
  height: '100%',
})

export const Container = styled('div', {
  width: '232px',
  position: 'relative', // importante para posicionar o ::before

  padding: '$10 3rem $6',
  borderRight: '1px solid $gray700',
  borderRadius: '12px',
  backgroundImage: `linear-gradient(105deg, $green200, $purple200, $gray800)`,
  maxHeight: '61.75rem',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden', // para o before não vazar

  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0, // cobre todo o aside
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    pointerEvents: 'none', // deixa clicar nos elementos abaixo
    zIndex: 1,
  },

  // opcional: elevar o conteúdo acima do ::before
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
})
