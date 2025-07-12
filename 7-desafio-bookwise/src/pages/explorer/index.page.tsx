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
  Tag,
  TagsContainer,
} from './styles'
import BookCard from '@/components/BookCard'
import * as Dialog from '@radix-ui/react-dialog'
import { BookDetailsModal } from './components/BookDetailsModal'
import { useQuery, dehydrate } from '@tanstack/react-query'
import { SearchInput } from '@/components/SearchInput'
import { useRouter } from 'next/router'
import { api } from '@/lib/axios'
import { prisma } from '@/lib/prisma'
import { getBooks } from '@/services/books.service'
import { GetServerSideProps } from 'next'
import { queryClient } from '@/lib/react-query'

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
  ratings: {
    average: number
    total: number
  }
}

interface Category {
  id: string
  name: string
}

export default function ExplorerPage() {
  const router = useRouter()

  // Get values from route query parameters
  const searchFromRoute = (router.query.search as string) || ''
  const categoryFromRoute = (router.query.category as string) || 'all'

  const [selectedTag, setSelectedTag] = React.useState(categoryFromRoute)
  const [selectedBookId, setSelectedBookId] = React.useState<string | null>(
    null,
  )
  const [searchQuery, setSearchQuery] = React.useState(searchFromRoute)

  // Sync state with route changes
  React.useEffect(() => {
    setSelectedTag(categoryFromRoute)
  }, [categoryFromRoute])

  React.useEffect(() => {
    setSearchQuery(searchFromRoute)
  }, [searchFromRoute])

  // Update URL when state changes (for sharing)
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

  const { data: books = [], isLoading: isLoadingBooks } = useQuery({
    queryKey: ['books', selectedTag, searchQuery],
    queryFn: async () => {
      const searchParams = new URLSearchParams()

      if (selectedTag !== 'all') {
        searchParams.append('category', selectedTag)
      }

      if (searchQuery) {
        searchParams.append('search', searchQuery)
      }

      const response = await api.get(`/books?${searchParams.toString()}`)
      return response.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<Category[]> => {
      const response = await api.get('/categories')
      return response.data
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  })

  const tags = ['all', ...categories.map((cat: Category) => cat.name)]

  const transformedBooks = books.map((book: Book) => ({
    id: book.id,
    title: book.name,
    author: {
      id: '00000000-0000-0000-0000-000000000000',
      name: book.author,
    },
    imageUrl: book.cover_url,
    rating: book.ratings.average,
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
                transformedBooks.map((book: any) => (
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

  // Prefetch queries for hydration
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['books', category as string, search as string],
      queryFn: () =>
        getBooks({
          category: category as string,
          search: search as string,
        }),
    }),
    queryClient.prefetchQuery({
      queryKey: ['categories'],
      queryFn: () =>
        prisma.category.findMany({
          orderBy: { name: 'asc' },
        }),
    }),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
