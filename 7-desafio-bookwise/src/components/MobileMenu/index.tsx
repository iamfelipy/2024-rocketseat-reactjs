import { styled } from '@/styles'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { NavigationContent } from '../shared/NavigationContent'

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

  const handleSignIn = () => {
    closeMenu()
    // Adicione lógica de login se necessário
  }

  const handleSignOut = () => {
    closeMenu()
    // Adicione lógica de logout se necessário
  }

  return (
    <MobileMenuContainer>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <List size={24} />}
      </MenuButton>

      <MenuOverlay isOpen={isOpen} onClick={closeMenu} />

      <MenuContent isOpen={isOpen}>
        <MenuHeader>
          <CloseButton onClick={closeMenu}>
            <X size={24} />
          </CloseButton>
        </MenuHeader>
        <NavigationContent
          pathname={pathname}
          isAuthenticated={isAuthenticated}
          onNavClick={closeMenu}
          onSignIn={handleSignIn}
          onSignOut={handleSignOut}
        />
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
