import React from 'react'
import AppLayout3Cols from '@/layouts/AppLayout3Cols'
import Sidebar from '@/components/Sidebar'
import { SectionWithHeader } from '@/components/SectionWithHeader'
import BookCard from '@/components/BookCard'
import { HomeContainer, Main, RecentReviewsList } from './styles'
import { styled } from '@/styles'

const books = [
  {
    id: 1,
    title: 'A revolução dos bichos',
    author: 'George Orwell',
    imageUrl: '/images/book-bichos.png',
    rating: 4,
  },
  {
    id: 2,
    title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
    author: 'Zeno Rocha',
    imageUrl: '/images/book-habitos.png',
    rating: 4,
  },
  {
    id: 3,
    title: 'O Fim da Eternidade',
    author: 'Isaac Asimov',
    imageUrl: '/images/book-eternidade.png',
    rating: 4,
  },
  {
    id: 4,
    title: 'Entendendo Algoritmos',
    author: 'Aditya Bhargava',
    imageUrl: '/images/book-algoritmos.png',
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
      actionHref="/books"
    >
      <BooksList>
        {books.map((book) => (
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
  return (
    <AppLayout3Cols left={<Sidebar />} right={<PopularBooksSection />}>
      <HomeContainer>
        <Main>
          <h1>Bem-vindo ao BookWise</h1>
          <p>
            Encontre seus livros favoritos e compartilhe suas experiências de
            leitura.
          </p>
        </Main>
        <RecentReviewsList>
          <SectionWithHeader title="Avaliações mais recentes">
            <BookCard
              css={{
                padding: '$6',
              }}
              imageWidth={108}
              imageHeight={152}
              book={{
                id: 1,
                title: 'O Hobbit',
                author: 'J.R.R. Tolkien',
                imageUrl: '/images/book-hobbit.png',
                rating: 4,
              }}
              user={{
                name: 'Jaxson Dias',
                avatarUrl:
                  'https://avatars.githubusercontent.com/u/50622611?v=4',
              }}
              createdAt={new Date('2025-06-13T10:00:00.000Z')}
              description="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh"
              showBookCardHeader
            />
            <BookCard
              css={{
                padding: '$6',
              }}
              imageWidth={108}
              imageHeight={152}
              book={{
                id: 3,
                title: 'Entendendo Algoritmos',
                author: 'Aditya Bhargava',
                imageUrl: '/images/book-algoritmos.png',
                rating: 4,
              }}
              createdAt={new Date('2025-06-13T10:00:00.000Z')}
              showDateAndRating
              description="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectu..."
            />
            <BookCard
              css={{
                padding: '$6',
              }}
              imageWidth={108}
              imageHeight={152}
              book={{
                id: 3,
                title: 'Entendendo Algoritmos',
                author: 'Aditya Bhargava',
                imageUrl: '/images/book-algoritmos.png',
                rating: 4,
              }}
              createdAt={new Date('2025-06-13T10:00:00.000Z')}
              showRating
              descriptionBottom="Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
    Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque."
            />
            <BookCard
              css={{
                padding: '$6',
              }}
              imageWidth={108}
              imageHeight={152}
              book={{
                id: 4,
                title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
                author: 'Zeno Rocha',
                imageUrl: '/images/book-habitos.png',
                rating: 4,
              }}
              reviewCount={3}
              showRating
            />
          </SectionWithHeader>
        </RecentReviewsList>
      </HomeContainer>
    </AppLayout3Cols>
  )
}
