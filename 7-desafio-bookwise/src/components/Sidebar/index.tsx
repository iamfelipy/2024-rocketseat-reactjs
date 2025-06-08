import { styled } from '@/styles'
import Link from 'next/link'
// import { signIn, signOut, useSession } from 'next-auth/react'

export default function Sidebar() {
  // const { data: session } = useSession()
  // const isAuthenticated = !!session
  const isAuthenticated = true

  const signOut = () => {}
  const signIn = () => {}

  return (
    <Container>
      <Logo>📚 BookWise</Logo>

      <Nav>
        <NavItem href="/">Início</NavItem>
        <NavItem href="/explorer">Explorar</NavItem>
        {isAuthenticated && (
          <>
            <NavItem href="/profile">Perfil</NavItem>
          </>
        )}
      </Nav>

      <Footer>
        {isAuthenticated ? (
          <Button onClick={() => signOut()}>Sair</Button>
        ) : (
          <Button onClick={() => signIn()}>Entrar</Button>
        )}
      </Footer>
    </Container>
  )
}

const Container = styled('aside', {
  padding: '$4',
  borderRight: '1px solid $gray700',
  backgroundColor: '$gray800',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

const Logo = styled('div', {
  fontWeight: 'bold',
  fontSize: '$xl',
  marginBottom: '$6',
})

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

const NavItem = styled(Link, {
  color: '$gray100',
  textDecoration: 'none',
  fontSize: '$md',

  '&:hover': {
    color: '$green100',
  },
})

const Footer = styled('footer', {
  marginTop: 'auto',
})

const Button = styled('button', {
  background: 'none',
  border: 'none',
  color: '$gray100',
  cursor: 'pointer',
  fontSize: '$sm',
  padding: 0,

  '&:hover': {
    color: '$green100',
  },
})
