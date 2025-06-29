import { api } from '@/lib/axios'

export interface Book {
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

interface GetBooksParams {
  category?: string
  search?: string
}

export const booksApi = {
  getBooks: async (params?: GetBooksParams): Promise<Book[]> => {
    const searchParams = new URLSearchParams()

    if (params?.category && params.category !== 'all') {
      searchParams.append('category', params.category)
    }

    if (params?.search) {
      searchParams.append('search', params.search)
    }

    const response = await api.get(`/books?${searchParams.toString()}`)
    return response.data
  },

  getBookById: async (id: string): Promise<Book> => {
    const response = await api.get(`/books/${id}`)
    return response.data
  },
}
