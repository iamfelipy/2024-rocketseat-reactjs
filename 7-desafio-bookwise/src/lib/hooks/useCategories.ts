import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export interface Category {
  id: string
  name: string
}

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<Category[]> => {
      const response = await api.get('/categories')
      return response.data
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
