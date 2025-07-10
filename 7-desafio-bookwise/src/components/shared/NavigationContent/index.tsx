import { Avatar } from '@/components/Avatar'
import { Logo, Nav, NavItem, Footer, Button, LoggedUser } from './styles'
import Image from 'next/image'
import { ChartLineUp, Binoculars, User, SignIn, SignOut } from 'phosphor-react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export function NavigationContent() {
  const { data: session, status } = useSession()
  const isAuthenticated = status === 'authenticated'
  const user = session?.user
  const { pathname } = useRouter()

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
        <NavItem href="/" active={pathname === '/'}>
          <ChartLineUp size={24} weight="bold" />
          Início
        </NavItem>
        <NavItem href="/explorer" active={pathname === '/explorer'}>
          <Binoculars size={24} weight="bold" />
          Explorar
        </NavItem>
        {isAuthenticated && (
          <NavItem
            href={`/profile/${user?.id}`}
            active={pathname.startsWith('/profile')}
          >
            <User size={24} weight="bold" />
            Perfil
          </NavItem>
        )}
      </Nav>

      <Footer>
        {isAuthenticated ? (
          // Button triggers signOut from next-auth
          <Button
            variant="logout"
            onClick={() => signOut({ callbackUrl: '/auth/signin' })}
          >
            <LoggedUser>
              <Avatar
                src={user?.avatar_url || user?.image || '/images/avatar-1.jpg'}
                width={30}
                height={30}
                alt=""
              />
              <span>{user?.name || 'Usuário'}</span>
            </LoggedUser>
            <SignOut size={20} weight="bold" />
          </Button>
        ) : (
          // Button triggers signIn from next-auth and redirects to /auth/signin
          <Button
            variant="login"
            onClick={() => signIn(undefined, { callbackUrl: '/auth/signin' })}
          >
            Fazer Login
            <SignIn size={20} weight="bold" />
          </Button>
        )}
      </Footer>
    </>
  )
}
