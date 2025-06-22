import React from 'react'
import AppLayout2Cols from '@/layouts/AppLayout2Cols'
import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import { Binoculars } from 'phosphor-react'
import {
  BooksGrid,
  ExplorerContainer,
  Header,
  PageTitle,
  SearchInputContainer,
  Tag,
  TagsContainer,
} from './styles'
import { SearchInput } from '@/components/SearchInput'
import BookCard from '@/components/BookCard'
import * as Dialog from '@radix-ui/react-dialog'
import { BookDetailsModal } from './components/BookDetailsModal'

const tags = [
  'Tudo',
  'Computação',
  'Educação',
  'Fantasia',
  'Ficção científica',
  'Horror',
  'HQs',
  'Suspense',
]

const books = [
  {
    id: 1,
    title: 'A revolução dos bichos',
    author: { id: 4, name: 'George Orwell' },
    imageUrl: '/images/book-bichos.png',
    rating: 3,
    isRead: false,
  },
  {
    id: 2,
    title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
    author: { id: 3, name: 'Zeno Rocha' },
    imageUrl: '/images/book-habitos.png',
    rating: 4,
    isRead: false,
  },
  {
    id: 3,
    title: 'O fim da eternidade',
    author: { id: 5, name: 'Isaac Asimov' },
    imageUrl: '/images/book-eternidade.png',
    rating: 4,
    isRead: false,
  },
  {
    id: 4,
    title: 'Entendendo Algoritmos',
    author: { id: 1, name: 'Aditya Y. Bhargava' },
    imageUrl: '/images/book-algoritmos.png',
    rating: 3,
    isRead: true,
  },
  {
    id: 5,
    title: 'Código limpo',
    author: { id: 6, name: 'Robert C. Martin' },
    imageUrl: '/images/codigo-limpo.png',
    rating: 4,
    isRead: false,
  },
  {
    id: 6,
    title: 'O poder do hábito',
    author: { id: 7, name: 'Charles Duhigg' },
    imageUrl: '/images/book-o-poder-do-habito.png',
    rating: 4,
    isRead: false,
  },
  {
    id: 7,
    title: 'Arquitetura limpa',
    author: { id: 6, name: 'Robert C. Martin' },
    imageUrl: '/images/book-arquitetura-limpa.png',
    rating: 2,
    isRead: false,
  },
  {
    id: 8,
    title: 'O Hobbit',
    author: { id: 8, name: 'J.R.R. Tolkien' },
    imageUrl: '/images/book-hobbit.png',
    rating: 3,
    isRead: true,
  },
  {
    id: 9,
    title: 'Histórias extraordinárias',
    author: { id: 9, name: 'Edgar Allan Poe' },
    imageUrl: '/images/book-historias-extraordinarias.png',
    rating: 3,
    isRead: false,
  },
  {
    id: 10,
    title: 'Refatoração',
    author: { id: 10, name: 'Martin Fowler' },
    imageUrl: '/images/book-refatoracao.png',
    rating: 3,
    isRead: false,
  },
  {
    id: 11,
    title: 'Domain-Driven Design',
    author: { id: 11, name: 'Eric Evans' },
    imageUrl: '/images/book-domain-driven-design.png',
    rating: 3,
    isRead: false,
  },
  {
    id: 12,
    title: 'Viagem ao Centro da Terra',
    author: { id: 12, name: 'Júlio Verne' },
    imageUrl: '/images/book-viagem-ao-centro-da-terra.png',
    rating: 3,
    isRead: false,
  },
  {
    id: 13,
    title: 'O guia do mochileiro das galáxias',
    author: { id: 2, name: 'Douglas Adams' },
    imageUrl: '/images/book-o-guia-do-mochileiro-das-galaxias.png',
    rating: 4,
    isRead: true,
  },
  {
    id: 14,
    title: 'Fragmentos do Horror',
    author: { id: 13, name: 'Junji Ito' },
    imageUrl: '/images/book-fragmentos-do-horror.png',
    rating: 4,
    isRead: false,
  },
  {
    id: 15,
    title: 'O Programador Pragmático',
    author: { id: 14, name: 'Andrew Hunt' },
    imageUrl: '/images/book-o-programador-pragmatico.png',
    rating: 4,
    isRead: false,
  },
]

export default function ExplorerPage() {
  const [selectedTag, setSelectedTag] = React.useState('Tudo')
  const [selectedBookId, setSelectedBookId] = React.useState<string | null>(
    null,
  )

  return (
    <AppLayout2Cols left={<Sidebar />}>
      <Main>
        <Dialog.Root
          onOpenChange={(open) => {
            if (!open) {
              setSelectedBookId(null)
            }
          }}
        >
          <ExplorerContainer>
            <Header>
              <PageTitle>
                <Binoculars size={32} weight="bold" />
                Explorar
              </PageTitle>
              <SearchInputContainer>
                <SearchInput />
              </SearchInputContainer>
            </Header>

            <TagsContainer>
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  data-active={selectedTag === tag}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </TagsContainer>

            <BooksGrid>
              {books.map((book) => (
                <Dialog.Trigger key={book.id} asChild>
                  <BookCard
                    onClick={() => setSelectedBookId(String(book.id))}
                    showRating
                    imageHeight={152}
                    imageWidth={108}
                    book={book}
                    isRead={book.isRead}
                  />
                </Dialog.Trigger>
              ))}
            </BooksGrid>
          </ExplorerContainer>
          {selectedBookId && <BookDetailsModal bookId={selectedBookId} />}
        </Dialog.Root>
      </Main>
    </AppLayout2Cols>
  )
}
