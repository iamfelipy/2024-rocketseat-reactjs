import { styled } from '@/styles'
import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'

interface AppLayout2ColsProps {
  children: ReactNode
}

export default function AppLayout2Cols({ children }: AppLayout2ColsProps) {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <header>Cabeçalho</header>
        {children}
      </MainContent>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '250px 1fr',
  minHeight: '100vh',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
})

const MainContent = styled('main', {
  padding: '$4',
})
