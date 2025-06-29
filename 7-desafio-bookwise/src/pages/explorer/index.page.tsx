import React from 'react'
import { GetServerSideProps } from 'next'
import AppLayout2Cols from '@/layouts/AppLayout2Cols'
import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import { Binoculars } from 'phosphor-react'
import {
  BooksGrid,
  ExplorerContainer,
  Header,
  PageTitle,
  Tag,
  TagsContainer,
} from './styles'
import BookCard from '@/components/BookCard'
import * as Dialog from '@radix-ui/react-dialog'
import { BookDetailsModal } from './components/BookDetailsModal'
import { useBooks } from '@/lib/hooks/useBooks'
import { useCategories } from '@/lib/hooks/useCategories'
import { SearchInput } from '@/components/SearchInput'
import { getBooksFromDatabase } from '@/lib/database/books'
import { getCategoriesFromDatabase } from '@/lib/database/categories'
import { useRouter } from 'next/router'

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  categories: Array<{
    id: string
    name: string
  }>
  average_rating: number
  ratings_count: number
}

interface Category {
  id: string
  name: string
}

interface ExplorerPageProps {
  initialBooks: Book[]
  initialCategories: Category[]
  initialSearch?: string
  initialCategory?: string
}

export default function ExplorerPage({
  initialBooks,
  initialCategories,
  initialSearch = '',
  initialCategory = 'all',
}: ExplorerPageProps & { initialSearch?: string; initialCategory?: string }) {
  const router = useRouter()

  const [selectedTag, setSelectedTag] = React.useState(initialCategory)
  const [selectedBookId, setSelectedBookId] = React.useState<string | null>(
    null,
  )
  const [searchQuery, setSearchQuery] = React.useState(initialSearch)

  React.useEffect(() => {
    const query: Record<string, string> = {}
    if (searchQuery) query.search = searchQuery
    if (selectedTag && selectedTag !== 'all') query.category = selectedTag
    router.replace(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, selectedTag])

  const { data: books = initialBooks, isLoading: isLoadingBooks } = useBooks({
    category: selectedTag !== 'all' ? selectedTag : undefined,
    search: searchQuery || undefined,
  })

  const { data: categories = initialCategories } = useCategories()

  const tags = ['all', ...categories.map((cat) => cat.name)]

  const transformedBooks = books.map((book) => ({
    id: book.id,
    title: book.name,
    author: {
      id: '00000000-0000-0000-0000-000000000000',
      name: book.author,
    },
    imageUrl: book.cover_url,
    rating: book.average_rating,
    isRead: false,
  }))

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
              <SearchInput
                placeholder="Buscar livro ou autor"
                defaultValue={searchQuery}
                onSearch={setSearchQuery}
              />
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
              {isLoadingBooks ? (
                <div>Loading books...</div>
              ) : (
                transformedBooks.map((book) => (
                  <Dialog.Trigger key={book.id} asChild>
                    <BookCard
                      onClick={() => setSelectedBookId(book.id)}
                      showRating
                      imageHeight={152}
                      imageWidth={108}
                      book={book}
                      isRead={book.isRead}
                    />
                  </Dialog.Trigger>
                ))
              )}
            </BooksGrid>
          </ExplorerContainer>
          {selectedBookId && <BookDetailsModal bookId={selectedBookId} />}
        </Dialog.Root>
      </Main>
    </AppLayout2Cols>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { search = '', category = 'all' } = ctx.query

  const [initialBooks, initialCategories] = await Promise.all([
    getBooksFromDatabase({
      search: typeof search === 'string' ? search : undefined,
      category: typeof category === 'string' ? category : undefined,
    }),
    getCategoriesFromDatabase(),
  ])

  return {
    props: {
      initialBooks,
      initialCategories,
      initialSearch: search,
      initialCategory: category,
    },
  }
}
