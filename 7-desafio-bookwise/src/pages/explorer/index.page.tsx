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
  SearchInputContainer,
  Tag,
  TagsContainer,
} from './styles'
import { SearchInput } from '@/components/SearchInput'
import BookCard from '@/components/BookCard'
import * as Dialog from '@radix-ui/react-dialog'
import { BookDetailsModal } from './components/BookDetailsModal'
import { useBooks } from '@/lib/hooks/useBooks'
import { useCategories } from '@/lib/hooks/useCategories'
import { useSearchForm } from '@/lib/hooks/useSearchForm'
import { api } from '@/lib/axios'

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
}

export default function ExplorerPage({
  initialBooks,
  initialCategories,
}: ExplorerPageProps) {
  const [selectedTag, setSelectedTag] = React.useState('all')
  const [selectedBookId, setSelectedBookId] = React.useState<string | null>(
    null,
  )

  // Use custom search form hook
  const { register, debouncedSearchQuery, errors, isSearching } =
    useSearchForm()

  // Use client-side data fetching only when user interacts (search or category change)
  const { data: books = initialBooks, isLoading: isLoadingBooks } = useBooks({
    category: selectedTag !== 'all' ? selectedTag : undefined,
    search: debouncedSearchQuery || undefined,
  })

  const { data: categories = initialCategories } = useCategories()

  // Create tags array with "all" as first option and then all categories
  const tags = ['all', ...categories.map((cat) => cat.name)]

  // Transform API book data to match BookCard interface
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
              <SearchInputContainer>
                <SearchInput
                  placeholder="Buscar livro ou autor"
                  {...register('query')}
                  hasError={!!errors.query}
                />
                {errors.query && (
                  <div
                    style={{
                      color: '#ef4444',
                      fontSize: '12px',
                      marginTop: '4px',
                      fontWeight: '500',
                    }}
                  >
                    {errors.query.message}
                  </div>
                )}
                {isSearching && (
                  <div
                    style={{
                      color: '#6b7280',
                      fontSize: '12px',
                      marginTop: '4px',
                      fontStyle: 'italic',
                    }}
                  >
                    Searching...
                  </div>
                )}
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Fetch initial data server-side
    const [booksResponse, categoriesResponse] = await Promise.all([
      api.get('/books'),
      api.get('/categories'),
    ])

    return {
      props: {
        initialBooks: booksResponse.data,
        initialCategories: categoriesResponse.data,
      },
    }
  } catch (error) {
    console.error('Error fetching initial data:', error)
    return {
      props: {
        initialBooks: [],
        initialCategories: [],
      },
    }
  }
}
