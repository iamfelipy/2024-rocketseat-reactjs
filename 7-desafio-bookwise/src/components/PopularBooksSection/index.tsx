import React from 'react'
import { SectionContainer, SectionHeader, BooksList } from './styles'
import BookCard from '../BookCard'
import { CaretRight } from 'phosphor-react'
import { LinkButton } from '../LinkButton'

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

export default function PopularBooksSection() {
  return (
    <SectionContainer>
      <SectionHeader>
        <span>Livros populares</span>
        <LinkButton color="purple" size="md" href="#">
          Ver todos
          <CaretRight size={16} />
        </LinkButton>
      </SectionHeader>
      <BooksList>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </BooksList>
    </SectionContainer>
  )
}
