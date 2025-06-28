import { useQuery } from '@tanstack/react-query'
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

interface UseBooksParams {
  category?: string
  search?: string
}

export function useBooks({ category, search }: UseBooksParams = {}) {
  return useQuery({
    queryKey: ['books', category, search],
    queryFn: async (): Promise<Book[]> => {
      const params = new URLSearchParams()

      if (category && category !== 'all') {
        params.append('category', category)
      }

      if (search) {
        params.append('search', search)
      }

      const response = await api.get(`/books?${params.toString()}`)
      return response.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
