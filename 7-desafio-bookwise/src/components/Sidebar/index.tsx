import {
  AvatarWrapper,
  Button,
  Container,
  Footer,
  LoggedUser,
  Logo,
  Nav,
  NavItem,
  Wrapper,
} from './styles'
// import { signIn, signOut, useSession } from 'next-auth/react'

import logoImg from '@/assets/mdi_book-heart-outline.svg'

import Image from 'next/image'

import { useRouter } from 'next/router'
import { ChartLineUp, Binoculars, User, SignIn, SignOut } from 'phosphor-react'

export default function Sidebar() {
  const { pathname } = useRouter()
  // const { data: session } = useSession()
  // const isAuthenticated = !!session
  const isAuthenticated = true

  const signOut = () => {}
  const signIn = () => {}

  return (
    <Wrapper>
      <Container>
        <Logo>
          <Image src={logoImg} width="24" height="24" alt="" />
          BookWise
        </Logo>

        <Nav>
          <NavItem href="/" active={pathname === '/'}>
            <ChartLineUp size={24} weight="bold" />
            Início
          </NavItem>

          <NavItem href="/explorer" active={pathname === '/explorer'}>
            <Binoculars size={24} weight="bold" />
            Explorar
          </NavItem>

          {isAuthenticated && (
            <NavItem href="/profile" active={pathname === '/profile'}>
              <User size={24} weight="bold" />
              Perfil
            </NavItem>
          )}
        </Nav>

        <Footer>
          {isAuthenticated ? (
            <Button variant="logout" onClick={() => signOut()}>
              <LoggedUser>
                <AvatarWrapper>
                  <Image
                    src="https://avatars.githubusercontent.com/u/50622611?v=4"
                    width={32}
                    height={32}
                    alt=""
                  />
                </AvatarWrapper>
                <span>Cristofer</span>
              </LoggedUser>
              <SignOut size={20} weight="bold" />
            </Button>
          ) : (
            <Button variant="login" onClick={() => signIn()}>
              Fazer Login
              <SignIn size={20} weight="bold" />
            </Button>
          )}
        </Footer>
      </Container>
    </Wrapper>
  )
}
