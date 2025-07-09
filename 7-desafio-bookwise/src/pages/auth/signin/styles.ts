import { styled } from '@/styles'

export const AuthContainer = styled('main', {
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '598px 1fr',
  maxWidth: 1440,
  margin: '0 auto',
  padding: 20,
  gap: '14.0625rem',

  '@media (max-width: 1259px)': {
    gap: '1rem',
  },

  '@media (max-width: 1132px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$10',
    padding: '$5',
  },

  '@media (max-width: 480px)': {
    padding: '$2',
  },
})

export const LogoSection = styled('aside', {
  position: 'relative',
  borderRadius: '$lg',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (max-width: 1132px)': {
    display: 'none',
  },
})

export const LoginSection = styled('section', {
  width: '100%',
  maxWidth: 372,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  fontWeight: '$bold',
  fontSize: '2.25rem',
  lineHeight: '$base',

  backgroundImage: '$gradient-horizontal',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',

  position: 'absolute',
  zIndex: 1,
})

export const MobileLogo = styled('div', {
  display: 'none',

  '@media (max-width: 1132px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$3',
    marginBottom: '$10',

    fontWeight: '$bold',
    fontSize: '2.25rem',
    lineHeight: '$base',

    backgroundImage: '$gradient-horizontal',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
  },

  '@media (max-width: 480px)': {
    fontSize: '1.75rem',
    gap: '$2',
  },
})

export const Header = styled('div', {
  marginBottom: '$10',

  h1: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
    color: '$gray100',
    marginBottom: '$2',
  },

  p: {
    fontSize: '$md',
    color: '$gray200',
    lineHeight: '$base',
  },

  '@media (max-width: 480px)': {
    h1: {
      fontSize: '$xl',
    },
    p: {
      fontSize: '$sm',
    },
  },
})

export const SignInButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const SignInButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '$5',
  width: '100%',
  padding: '$5 $6',
  background: '$gray600',
  border: 'none',
  borderRadius: '$md',
  color: '$gray200',
  fontSize: '$lg',
  fontWeight: '$bold',
  cursor: 'pointer',
  transition: 'background 0.2s',

  '&:hover': {
    background: '$gray500',
  },

  '@media (max-width: 480px)': {
    fontSize: '$md',
    padding: '$4 $5',
    gap: '$4',
  },
})

export const AuthError = styled('div', {
  marginTop: '$4',
  padding: '$3 $4',
  background: '$red500',
  color: '$white',
  fontSize: '$sm',
  fontWeight: '$medium',
  borderRadius: '$md',
  textAlign: 'center',
  border: '1px solid $red400',
})
