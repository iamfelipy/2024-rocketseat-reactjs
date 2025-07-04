import React from 'react'
import AppLayout3Cols from '@/layouts/AppLayout3Cols'
import Sidebar from '@/components/Sidebar'
import { SectionWithHeader } from '@/components/SectionWithHeader'
import BookCard from '@/components/BookCard'
import { HomeContainer, LastReadBook, Main, PageTitle } from './styles'
import { styled } from '@/styles'
import { ChartLineUp } from 'phosphor-react'
import { RecentReviewsSection } from './components/RecentReviewsSection'
import { LastReadSection } from './components/LastReadSection'

export default function HomePage() {
  const isAuthenticated = true // ou sua lógica real

  return (
    <AppLayout3Cols left={<Sidebar />} right={<PopularBooksSection />}>
      <HomeContainer>
        <Main>
          <PageTitle>
            <ChartLineUp size={32} weight="bold" />
            Início
          </PageTitle>
          {isAuthenticated && <LastReadSection />}
          <RecentReviewsSection />
        </Main>
      </HomeContainer>
    </AppLayout3Cols>
  )
}
