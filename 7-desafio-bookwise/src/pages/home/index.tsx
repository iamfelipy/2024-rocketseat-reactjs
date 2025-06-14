import React from 'react'
import AppLayout3Cols from '@/layouts/AppLayout3Cols'
import { styled } from '@/styles'
import Sidebar from '@/components/Sidebar'
import PopularBooksSection from '@/components/PopularBooksSection'

const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export default function HomePage() {
  return (
    <HomeContainer>
      <h1>Bem-vindo ao BookWise</h1>
      <p>
        Encontre seus livros favoritos e compartilhe suas experiências de
        leitura.
      </p>
    </HomeContainer>
  )
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AppLayout3Cols left={<Sidebar />} right={<PopularBooksSection />}>
      {page}
    </AppLayout3Cols>
  )
}
