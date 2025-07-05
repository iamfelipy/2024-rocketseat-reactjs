import { Avatar } from '@/components/Avatar'
import { Logo, Nav, NavItem, Footer, Button, LoggedUser } from './styles'
import Image from 'next/image'
import { ChartLineUp, Binoculars, User, SignIn, SignOut } from 'phosphor-react'

// Mock session object similar to next-auth
const mockSession = {
  data: {
    user: {
      id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
      name: 'Cristofer',
      avatarUrl: 'https://avatars.githubusercontent.com/u/50622611?v=4',
    },
  },
  status: 'authenticated',
}

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
  // Extract user data from mock session
  const user = mockSession.data?.user

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
            href={`/profile/${user?.id}`}
            active={pathname.startsWith('/profile')}
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
                src={user?.avatarUrl || '/images/avatar-1.jpg'}
                width={30}
                height={30}
                alt=""
              />
              <span>{user?.name || 'Usuário'}</span>
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
