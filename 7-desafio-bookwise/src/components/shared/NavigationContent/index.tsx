import { Avatar } from '@/components/Avatar'
import { Logo, Nav, NavItem, Footer, Button, LoggedUser } from './styles'
import Image from 'next/image'
import { ChartLineUp, Binoculars, User, SignIn, SignOut } from 'phosphor-react'

interface NavigationContentProps {
  pathname: string
  isAuthenticated: boolean
  onNavClick?: () => void
  onSignIn?: () => void
  onSignOut?: () => void
}

export function NavigationContent({
  pathname,
  isAuthenticated,
  onNavClick,
  onSignIn,
  onSignOut,
}: NavigationContentProps) {
  return (
    <>
      <Logo>
        <Image
          src={'/images/mdi_book-heart-outline.svg'}
          width="24"
          height="24"
          alt=""
        />
        BookWise
      </Logo>

      <Nav>
        <NavItem href="/" active={pathname === '/'} onClick={onNavClick}>
          <ChartLineUp size={24} weight="bold" />
          Início
        </NavItem>
        <NavItem
          href="/explorer"
          active={pathname === '/explorer'}
          onClick={onNavClick}
        >
          <Binoculars size={24} weight="bold" />
          Explorar
        </NavItem>
        {isAuthenticated && (
          <NavItem
            href="/profile"
            active={pathname === '/profile'}
            onClick={onNavClick}
          >
            <User size={24} weight="bold" />
            Perfil
          </NavItem>
        )}
      </Nav>

      <Footer>
        {isAuthenticated ? (
          <Button variant="logout" onClick={onSignOut}>
            <LoggedUser>
              <Avatar
                src="https://avatars.githubusercontent.com/u/50622611?v=4"
                width={30}
                height={30}
                alt=""
              />
              <span>Cristofer</span>
            </LoggedUser>
            <SignOut size={20} weight="bold" />
          </Button>
        ) : (
          <Button variant="login" onClick={onSignIn}>
            Fazer Login
            <SignIn size={20} weight="bold" />
          </Button>
        )}
      </Footer>
    </>
  )
}
