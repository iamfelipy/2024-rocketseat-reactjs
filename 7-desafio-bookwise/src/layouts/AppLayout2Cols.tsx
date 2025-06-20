import { styled } from '@/styles'
import { ReactNode } from 'react'
import MobileMenu from '@/components/MobileMenu'

interface AppLayout2ColsProps {
  children: ReactNode
  left: ReactNode
}

export default function AppLayout2Cols({
  children,
  left,
}: AppLayout2ColsProps) {
  return (
    <LayoutWrapper>
      <MobileMenu />
      <SidebarWrapper>{left}</SidebarWrapper>
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  )
}

const SidebarWrapper = styled('div', {
  backgroundColor: '$gray900',
  height: '100%',
  margin: '$5 0 $5 $5',
  gridArea: 'sidebar',
})

const MainContent = styled('main', {
  margin: '5rem 6rem 3rem 6rem',
  gridArea: 'main',
})

const LayoutWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '250px 1fr',
  minHeight: '100vh',
  maxWidth: '1440px',
  margin: '0 auto',
  gridTemplateAreas: '"sidebar main"',

  '@media (max-width: 1250px)': {
    gridTemplateColumns: '1fr',
    gridTemplateAreas: '"main"',

    width: '100%',

    [`> ${SidebarWrapper}`]: {
      display: 'none',
    },

    [`> ${MainContent}`]: {},
  },

  '@media (max-width: 1024px)': {
    [`> ${MainContent}`]: {
      margin: '5rem 1rem 1rem 1rem',
    },
  },
})
