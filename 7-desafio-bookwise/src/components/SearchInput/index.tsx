import { InputHTMLAttributes } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { IconContainer, Input, SearchInputContainer } from './styles'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export function SearchInput({ ...props }: SearchInputProps) {
  return (
    <SearchInputContainer>
      <Input placeholder="Buscar livro ou autor" {...props} />
      <IconContainer>
        <MagnifyingGlass size={20} />
      </IconContainer>
    </SearchInputContainer>
  )
}
