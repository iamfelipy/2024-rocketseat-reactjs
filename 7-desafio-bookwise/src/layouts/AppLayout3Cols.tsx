import { styled } from '@/styles'
import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import AsidePanel from '@/components/AsidePanel'

interface AppLayout3ColsProps {
  children: ReactNode
  right?: ReactNode
}

export default function AppLayout3Cols({
  children,
  right,
}: AppLayout3ColsProps) {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <header>Cabeçalho</header>
        {children}
      </MainContent>
      <AsideWrapper>{right ?? <AsidePanel />}</AsideWrapper>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '250px 1fr 300px',
  minHeight: '100vh',

  '@media (max-width: 1024px)': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto auto',
  },
})

const MainContent = styled('main', {
  padding: '$4',
})

const AsideWrapper = styled('aside', {
  borderLeft: '1px solid $gray700',
  padding: '$4',
  backgroundColor: '$gray900',

  '@media (max-width: 1024px)': {
    display: 'none',
  },
})
