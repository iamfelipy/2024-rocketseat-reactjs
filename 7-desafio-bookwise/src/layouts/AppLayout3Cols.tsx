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

const LayoutWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '252px 1fr 420px',
  minHeight: '100vh',
  maxWidth: '1440px',
  margin: '0 auto',

  '@media (max-width: 1024px)': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto auto',

    '& > aside': {
      display: 'none',
    },
  },

  '@media (max-width: 768px)': {
    '& > aside:first-child': {
      display: 'none',
    },
  },
})

const SidebarWrapper = styled('aside', {
  backgroundColor: '$gray900',
  height: '100%',
})

const MainContent = styled('main', {
  padding: '4.5rem 4rem 1rem 6rem',

  '@media (max-width: 1024px)': {
    padding: '5rem 1rem 1rem',
  },
})

const AsideWrapper = styled('aside', {
  marginTop: '9.125rem',
  marginRight: '6rem',
  backgroundColor: '$gray900',
})
