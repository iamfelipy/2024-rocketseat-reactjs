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
import { prisma } from '@/lib/prisma'
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

  const whereClause: any = {}

  if (category && category !== 'all') {
    whereClause.categories = {
      some: {
        category: {
          name: category,
        },
      },
    }
  }

  if (search) {
    whereClause.OR = [
      {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
      {
        author: {
          contains: search,
          mode: 'insensitive',
        },
      },
    ]
  }

  const [books, initialCategories] = await Promise.all([
    prisma.book.findMany({
      where: whereClause,
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        ratings: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    }),
    prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    }),
  ])

  const initialBooks = books.map((book) => {
    const totalRatings = book.ratings.length
    const averageRating =
      totalRatings > 0
        ? Math.round(
            book.ratings.reduce((acc, rating) => acc + rating.rate, 0) /
              totalRatings,
          )
        : 0

    return {
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      created_at: book.created_at.toISOString(),
      categories: book.categories.map((cat) => cat.category),
      average_rating: Math.round(averageRating * 10) / 10,
      ratings_count: totalRatings,
    }
  })

  return {
    props: {
      initialBooks,
      initialCategories,
      initialSearch: search,
      initialCategory: category,
    },
  }
}
