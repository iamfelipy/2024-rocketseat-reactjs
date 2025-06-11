import { styled } from '@/styles'
import {
  List,
  X,
  ChartLineUp,
  Binoculars,
  User,
  SignIn,
  SignOut,
} from 'phosphor-react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import logoImg from '@/assets/mdi_book-heart-outline.svg'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useRouter()
  const isAuthenticated = true // This should match your auth logic

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <MobileMenuContainer>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <List size={24} />}
      </MenuButton>

      <MenuOverlay isOpen={isOpen} onClick={closeMenu} />

      <MenuContent isOpen={isOpen}>
        <MenuHeader>
          <Logo>
            <Image src={logoImg} width="24" height="24" alt="" />
            BookWise
          </Logo>
          <CloseButton onClick={closeMenu}>
            <X size={24} />
          </CloseButton>
        </MenuHeader>

        <Nav>
          <NavItem href="/" active={pathname === '/'} onClick={closeMenu}>
            <ChartLineUp size={24} weight="bold" />
            Início
          </NavItem>

          <NavItem
            href="/explorer"
            active={pathname === '/explorer'}
            onClick={closeMenu}
          >
            <Binoculars size={24} weight="bold" />
            Explorar
          </NavItem>

          {isAuthenticated && (
            <NavItem
              href="/profile"
              active={pathname === '/profile'}
              onClick={closeMenu}
            >
              <User size={24} weight="bold" />
              Perfil
            </NavItem>
          )}
        </Nav>

        <Footer>
          {isAuthenticated ? (
            <Button variant="logout" onClick={closeMenu}>
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
            <Button variant="login" onClick={closeMenu}>
              Fazer Login
              <SignIn size={20} weight="bold" />
            </Button>
          )}
        </Footer>
      </MenuContent>
    </MobileMenuContainer>
  )
}

const MobileMenuContainer = styled('div', {
  display: 'none',

  '@media (max-width: 1024px)': {
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '$gray800',
    padding: '$4',
    borderBottom: '1px solid $gray700',
  },
})

const MenuButton = styled('button', {
  background: 'none',
  border: 'none',
  color: '$gray100',
  cursor: 'pointer',
  padding: '$2',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const MenuOverlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 98,
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.2s ease-in-out',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
})

const MenuContent = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  width: '100%',
  maxWidth: '300px',
  backgroundColor: '$gray800',
  padding: '$5',
  zIndex: 99,
  transform: 'translateX(-100%)',
  transition: 'transform 0.2s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  variants: {
    isOpen: {
      true: {
        transform: 'translateX(0)',
      },
    },
  },
})

const MenuHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$4',
})

const CloseButton = styled('button', {
  background: 'none',
  border: 'none',
  color: '$gray400',
  cursor: 'pointer',
  padding: '$2',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'color 0.2s',

  '&:hover': {
    color: '$gray100',
  },
})

const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontWeight: '$bold',
  fontSize: '$xl',
  backgroundImage: '$gradient-horizontal',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
})

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

const NavItem = styled('a', {
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

const Footer = styled('footer', {
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'center',
})

const Button = styled('button', {
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

const LoggedUser = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
})

const AvatarWrapper = styled('div', {
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
