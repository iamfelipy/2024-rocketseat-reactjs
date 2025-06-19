import { styled } from '@/styles'
import { ReactNode } from 'react'
import MobileMenu from '@/components/MobileMenu'

interface AppLayout3ColsProps {
  children: ReactNode
  left: ReactNode
  right: ReactNode
}

export default function AppLayout3Cols({
  children,
  left,
  right,
}: AppLayout3ColsProps) {
  return (
    <LayoutWrapper>
      <MobileMenu />
      <SidebarWrapper>{left}</SidebarWrapper>
      <MainContent>{children}</MainContent>
      <AsideWrapper>{right}</AsideWrapper>
    </LayoutWrapper>
  )
}

const SidebarWrapper = styled('aside', {
  backgroundColor: '$gray900',
  height: '100%',
  gridArea: 'sidebar',
})

const MainContent = styled('main', {
  padding: '4.5rem 4rem 1rem 6rem',
  gridArea: 'main',

  '@media (max-width: 1024px)': {
    padding: '5rem 1rem 1rem',
  },
})

const AsideWrapper = styled('aside', {
  marginTop: '9.125rem',
  marginRight: '6rem',
  backgroundColor: '$gray900',
  gridArea: 'aside',
})

const LayoutWrapper = styled('div', {
  display: 'grid',
  gridTemplateAreas: '"sidebar main aside"',
  gridTemplateColumns: '252px 1fr 420px',
  minHeight: '100vh',
  maxWidth: '1440px',
  margin: '0 auto',

  '@media (max-width: 1250px)': {
    gridTemplateAreas: '"main aside"',
    gridTemplateColumns: '1fr 420px',
    gridTemplateRows: 'auto',
    height: 'auto',
    minHeight: 'auto',

    [`> ${SidebarWrapper}`]: {
      display: 'none',
    },

    [`> ${MainContent}`]: {
      padding: '1rem 1rem 1rem',
      marginTop: '5rem',
    },

    [`> ${AsideWrapper}`]: {
      margin: 0,
      marginTop: '9.6rem',
      padding: '1rem',
      minHeight: '0',
      '> aside': {
        padding: 0,
      },
    },
  },

  '@media (max-width: 800px)': {
    gridTemplateAreas: '"main" "aside"',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto',
    height: 'auto',
    minHeight: 'auto',

    [`> ${SidebarWrapper}`]: {
      display: 'none',
    },

    [`> ${MainContent}`]: {
      padding: '1rem',
      marginTop: '5rem',
    },

    [`> ${AsideWrapper}`]: {
      margin: 0,
      padding: '1rem',
      minHeight: '0',
      '> aside': {
        padding: 0,
      },
    },
  },
})
