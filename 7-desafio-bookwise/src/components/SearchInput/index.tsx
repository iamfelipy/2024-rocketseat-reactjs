import React, { useEffect } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useDebounce } from '@/lib/hooks/useDebounce'
import {
  ErrorMessage,
  SearchingIndicator,
  SearchInputContainer,
  IconContainer,
  Input,
} from './styles'

// Search form validation schema
const searchSchema = z.object({
  query: z
    .string()
    .max(100, 'Search query must be less than 100 characters')
    .regex(
      /^[a-zA-ZÀ-ÿ0-9\s\-_.,!?]+$/,
      'Search query contains invalid characters',
    )
    .optional(),
})

type SearchFormData = z.infer<typeof searchSchema>

export interface SearchInputProps {
  placeholder?: string
  onSearch: (query: string) => void
  children?: React.ReactNode
  defaultDelay?: number
  defaultValue?: string
}

export function SearchInput({
  placeholder = 'Search...',
  onSearch,
  children,
  defaultDelay = 500,
  defaultValue = '',
}: SearchInputProps) {
  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: { query: defaultValue },
  })

  const searchQuery = form.watch('query')
  const debouncedSearchQuery = useDebounce(searchQuery, defaultDelay)
  const errors = form.formState.errors
  const isSearching = searchQuery && searchQuery !== debouncedSearchQuery

  useEffect(() => {
    onSearch(debouncedSearchQuery || '')
  }, [debouncedSearchQuery, onSearch])

  return (
    <div>
      <SearchInputContainer>
        <Input
          placeholder={placeholder}
          {...form.register('query')}
          css={errors.query ? { borderColor: '$red500' } : undefined}
        />
        <IconContainer>
          <MagnifyingGlass size={20} />
        </IconContainer>
        {errors.query && <ErrorMessage>{errors.query.message}</ErrorMessage>}
        {isSearching && <SearchingIndicator>Searching...</SearchingIndicator>}
      </SearchInputContainer>

      {children}
    </div>
  )
}
