import { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostContext'
import { Container, PostCard } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PostList() {
  const { posts } = useContext(PostContext)

  function truncateString(str: string, maxLength: number) {
    return str?.length > maxLength ? str?.slice(0, maxLength) + ' ...' : str
  }

  return (
    <Container>
      {posts.map((post) => (
        <PostCard key={post.number}>
          <header>
            <h3>{truncateString(post.title, 30)}</h3>
            <span>
              {formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </header>
          <p>{truncateString(post.body, 170)}</p>
        </PostCard>
      ))}
    </Container>
  )
}
