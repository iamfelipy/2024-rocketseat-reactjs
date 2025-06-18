import { styled } from '@/styles'
import Link from 'next/link'

export const Wrapper = styled('aside', {
  padding: '$5',
  maxHeight: '61.75rem',
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

        '&:hover': {},

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
