import { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { IconContainer, Input, SearchInputContainer } from './styles'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export const SearchInput = forwardRef(function SearchInput(
  { ...props }: SearchInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <SearchInputContainer>
      <Input placeholder="Buscar livro ou autor" ref={ref} {...props} />
      <IconContainer>
        <MagnifyingGlass size={20} />
      </IconContainer>
    </SearchInputContainer>
  )
})
