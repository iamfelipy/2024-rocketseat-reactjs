import React from 'react'
import AppLayout3Cols from '@/layouts/AppLayout3Cols'
import Sidebar from '@/components/Sidebar'
import { SectionWithHeader } from '@/components/SectionWithHeader'
import BookCard from '@/components/BookCard'
import { HomeContainer, LastReadBook, Main, PageTitle } from './styles'
import { styled } from '@/styles'
import { ChartLineUp } from 'phosphor-react'
import { RecentReviewsSection } from './components/RecentReviewsSection'

const popularBooks = [
  {
    id: '1',
    title: 'A Revolução dos Bichos',
    author: { id: 'george-orwell', name: 'George Orwell' },
    imageUrl: '/images/book-a-revolucao-dos-bichos.png',
    rating: 4,
  },
  {
    id: '2',
    title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
    author: { id: 'zeno-rocha', name: 'Zeno Rocha' },
    imageUrl: '/images/book-habitos.png',
    rating: 4,
  },
  {
    id: '3',
    title: 'O Fim da Eternidade',
    author: { id: 'isaac-asimov', name: 'Isaac Asimov' },
    imageUrl: '/images/book-o-fim-da-eternidade.png',
    rating: 4,
  },
]

export const BooksList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

const PopularBooksSection = () => {
  return (
    <SectionWithHeader
      title="Livros populares"
      actionText="Ver todos"
      actionHref="/explorer"
    >
      <BooksList>
        {popularBooks.map((book) => (
          <BookCard
            showRating
            imageWidth={64}
            imageHeight={94}
            key={book.id}
            book={book}
          />
        ))}
      </BooksList>
    </SectionWithHeader>
  )
}

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
          {isAuthenticated && (
            <LastReadBook>
              <SectionWithHeader
                title="Sua última leitura"
                actionText="Ver todos"
                actionHref="/profile"
              >
                <BookCard
                  css={{
                    padding: '$6',
                    backgroundColor: '$gray600',
                  }}
                  imageWidth={108}
                  imageHeight={152}
                  book={{
                    id: '3',
                    title: 'Entendendo Algoritmos',
                    author: { id: 'aditya-bhargava', name: 'Aditya Bhargava' },
                    imageUrl: '/images/book-algoritmos.png',
                    rating: 4,
                  }}
                  createdAt={new Date('2025-06-13T10:00:00.000Z')}
                  showDateAndRating
                  priority
                  description="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu..."
                />
              </SectionWithHeader>
            </LastReadBook>
          )}
          <RecentReviewsSection />
        </Main>
      </HomeContainer>
    </AppLayout3Cols>
  )
}
