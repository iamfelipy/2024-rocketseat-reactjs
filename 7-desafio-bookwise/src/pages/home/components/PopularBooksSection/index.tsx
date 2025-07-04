import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import BookCard from '@/components/BookCard'
import { SectionWithHeader } from '@/components/SectionWithHeader'
import { BooksList } from './styles'

interface Book {
  id: string
  title: string
  author: string
  imageUrl: string
  rating: number
}

export function PopularBooksSection() {
  const { data: books = [], isLoading } = useQuery<Book[]>({
    queryKey: ['popular-books'],
    queryFn: async () => {
      const response = await api.get('/books/popular')
      return response.data
    },
    staleTime: 1000 * 60 * 10,
  })

  return (
    <SectionWithHeader
      title="Livros populares"
      actionText="Ver todos"
      actionHref="/explorer"
    >
      <BooksList>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          books.map((book) => (
            <BookCard
              showRating
              imageWidth={64}
              imageHeight={94}
              key={book.id}
              book={{
                id: book.id,
                title: book.title,
                author: { id: '', name: book.author },
                imageUrl: book.imageUrl,
                rating: book.rating,
              }}
            />
          ))
        )}
      </BooksList>
    </SectionWithHeader>
  )
}
