import { useQuery } from '@tanstack/react-query'
import { booksApi, Book } from '@/lib/api/books'

interface UseBooksParams {
  category?: string
  search?: string
}

export function useBooks({ category, search }: UseBooksParams = {}) {
  return useQuery({
    queryKey: ['books', category, search],
    queryFn: () => booksApi.getBooks({ category, search }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export function useBook(id: string) {
  return useQuery({
    queryKey: ['book', id],
    queryFn: () => booksApi.getBookById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Re-export the Book type for convenience
export type { Book }
