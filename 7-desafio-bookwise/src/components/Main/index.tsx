import { styled } from '@/styles'
import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  return <MainContainer>{children}</MainContainer>
}

const MainContainer = styled('main', {
  padding: '$4',
})
