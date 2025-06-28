import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useDebounce } from './useDebounce'

// Default search form validation schema
const defaultSearchSchema = z.object({
  query: z
    .string()
    .max(100, 'Search query must be less than 100 characters')
    .regex(
      /^[a-zA-ZÀ-ÿ0-9\s\-_.,!?]+$/,
      'Search query contains invalid characters',
    )
    .optional(),
})

type SearchFormData = z.infer<typeof defaultSearchSchema>

interface UseSearchFormOptions {
  defaultDelay?: number
  defaultValues?: Partial<SearchFormData>
}

export function useSearchForm(options: UseSearchFormOptions = {}) {
  const { defaultDelay = 500, defaultValues = { query: '' } } = options

  const form = useForm<SearchFormData>({
    resolver: zodResolver(defaultSearchSchema),
    defaultValues,
  })

  const searchQuery = form.watch('query')
  const debouncedSearchQuery = useDebounce(searchQuery, defaultDelay)

  return {
    form,
    searchQuery,
    debouncedSearchQuery,
    register: form.register,
    errors: form.formState.errors,
    isSearching: searchQuery && searchQuery !== debouncedSearchQuery,
  }
}
