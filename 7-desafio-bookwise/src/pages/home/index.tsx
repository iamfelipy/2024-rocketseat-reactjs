import React from 'react'
import AppLayout3Cols from '@/layouts/AppLayout3Cols'
import Sidebar from '@/components/Sidebar'
import { HomeContainer, Main, PageTitle } from './styles'
import { ChartLineUp } from 'phosphor-react'
import { RecentReviewsSection } from './components/RecentReviewsSection'
import { LastReadSection } from './components/LastReadSection'
import { PopularBooksSection } from './components/PopularBooksSection'

export default function HomePage() {
  return (
    <AppLayout3Cols left={<Sidebar />} right={<PopularBooksSection />}>
      <HomeContainer>
        <Main>
          <PageTitle>
            <ChartLineUp size={32} weight="bold" />
            Início
          </PageTitle>
          <LastReadSection />
          <RecentReviewsSection />
        </Main>
      </HomeContainer>
    </AppLayout3Cols>
  )
}
