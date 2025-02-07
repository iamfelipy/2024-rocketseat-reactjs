import { useForm } from 'react-hook-form'
import {
  Container,
  WrapperInputAndButton,
  WrapperTitleAndPostCount,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchBar() {
  const { fetchPosts, posts } = useContext(PostContext)

  const {
    register,
    handleSubmit,
    // formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handlSearchPost(data: SearchFormInputs) {
    fetchPosts(data.query)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handlSearchPost)}>
        <WrapperTitleAndPostCount>
          <h2>Publicações</h2>
          <span>{posts.length} publicações</span>
        </WrapperTitleAndPostCount>
        <WrapperInputAndButton>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
          <button type="submit">Buscar</button>
        </WrapperInputAndButton>
      </form>
    </Container>
  )
}
