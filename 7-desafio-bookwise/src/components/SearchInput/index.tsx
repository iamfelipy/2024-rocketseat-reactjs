import { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { IconContainer, Input, SearchInputContainer } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const SearchInput = forwardRef(function SearchInput(
  { hasError = false, ...props }: SearchInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <SearchInputContainer>
      <Input
        placeholder="Buscar livro ou autor"
        ref={ref}
        {...props}
        css={hasError ? { borderColor: '$red500' } : undefined}
      />
      <IconContainer>
        <MagnifyingGlass size={20} />
      </IconContainer>
    </SearchInputContainer>
  )
})
