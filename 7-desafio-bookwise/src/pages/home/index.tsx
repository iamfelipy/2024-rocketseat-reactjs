import React from 'react'
import AppLayout3Cols from '@/layouts/AppLayout3Cols'
import Sidebar from '@/components/Sidebar'
import { SectionWithHeader } from '@/components/SectionWithHeader'
import BookCard from '@/components/BookCard'
import {
  HomeContainer,
  LastReadBook,
  Main,
  PageTitle,
  RecentReviewsList,
} from './styles'
import { styled } from '@/styles'
import { ChartLineUp } from 'phosphor-react'

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

const recentReviews = [
  {
    id: '1',
    book: {
      id: '4',
      title: 'O Hobbit',
      author: { id: 'jrr-tolkien', name: 'J.R.R. Tolkien' },
      imageUrl: '/images/book-o-hobbit.png',
      rating: 4,
    },
    user: {
      id: 'jason-dias',
      name: 'Jason Dias',
      avatarUrl: '/images/avatar-1.jpg',
    },
    createdAt: new Date('2025-06-13T10:00:00.000Z'),
    description:
      'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
  },
  {
    id: '2',
    book: {
      id: '5',
      title: 'O Guia do Mochileiro das Galáxias',
      author: { id: 'douglas-adams', name: 'Douglas Adams' },
      imageUrl: '/images/book-o-guia-do-mochileiro-das-galaxias.png',
      rating: 4,
    },
    user: {
      id: 'brandon-botosh',
      name: 'Brandon Botosh',
      avatarUrl: '/images/avatar-2.jpg',
    },
    createdAt: new Date('2025-06-13T10:00:00.000Z'),
    description:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
  },
  {
    id: '3',
    book: {
      id: '6',
      title: 'Entendendo Algoritmos',
      author: { id: 'aditya-bhargava', name: 'Aditya Bhargava' },
      imageUrl: '/images/book-algoritmos.png',
      rating: 4,
    },
    user: {
      id: 'lindsey-philips',
      name: 'Lindsey Philips',
      avatarUrl: '/images/avatar-3.jpg',
    },
    createdAt: new Date('2025-06-13T10:00:00.000Z'),
    description:
      'Integer at tincidunt sed mi. Venenatis nunc justo porta viverra lacus scelerisque ut orci ultricies. Massa ultrices lacus non lectus pellentesque cras posuere neque. Nunc nisl curabitur et non. Tellus senectus elit porta lorem.',
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
                  description="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu..."
                />
              </SectionWithHeader>
            </LastReadBook>
          )}
          <RecentReviewsList>
            <SectionWithHeader title="Avaliações mais recentes">
              {recentReviews.map((review) => (
                <BookCard
                  key={review.id}
                  css={{
                    padding: '$6',
                  }}
                  imageWidth={108}
                  imageHeight={152}
                  book={review.book}
                  user={review.user}
                  createdAt={review.createdAt}
                  description={review.description}
                  showBookCardHeader
                />
              ))}
            </SectionWithHeader>
          </RecentReviewsList>
        </Main>
      </HomeContainer>
    </AppLayout3Cols>
  )
}
