import { styled } from '@/styles'
import Link from 'next/link'

export const Wrapper = styled('aside', {
  padding: '$5',
  maxHeight: '61.75rem',
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

export const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  marginBottom: '4rem',

  fontWeight: '$bold',
  fontSize: '$xl',

  backgroundImage: '$gradient-horizontal',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
})

export const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const NavItem = styled(Link, {
  color: '$gray400',
  textDecoration: 'none',
  fontSize: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  position: 'relative',
  paddingLeft: '1.5rem',

  '&::before': {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    borderRadius: '999px',
    backgroundImage: '$gradient-horizontal',
    opacity: 0,
    transition: 'opacity 0.2s',
  },

  '&:hover': {
    fontWeight: '$regular',
  },

  variants: {
    active: {
      true: {
        color: '$white',
        fontWeight: '$bold',
        '&::before': {
          opacity: 1,
        },
      },
    },
  },
})

export const Footer = styled('footer', {
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'center',
})

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$3',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '$md',
  fontWeight: '$bold',
  padding: 0,

  variants: {
    variant: {
      login: {
        color: '$gray100',

        '&:hover': {
          // color: '$green100',
        },

        '& > svg': {
          color: '$green100',
        },
      },

      logout: {
        color: '#F75A68',

        '&:hover': {
          color: '#F75A68',
        },

        '& > svg': {
          color: '#F75A68',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'login',
  },
})

export const LoggedUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
})

export const AvatarWrapper = styled('div', {
  width: '32px',
  height: '32px',
  borderRadius: '999px',
  padding: '0.0625rem',
  backgroundImage: '$gradient-vertical',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    borderRadius: '999px',
  },
})
