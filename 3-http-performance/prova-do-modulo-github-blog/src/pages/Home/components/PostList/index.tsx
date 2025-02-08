import { useContext, useEffect, useState } from 'react'
import { PostContext } from '../../../../contexts/PostContext'
import { Container, PostCard } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PostList() {
  const { posts } = useContext(PostContext)

  function truncateString(str: string, maxLength: number) {
    return str?.length > maxLength ? str?.slice(0, maxLength) + ' ...' : str
  }

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize) // Remove o evento ao desmontar
    }
  }, [])

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
          <p>
            {size.width > 780 && truncateString(post.body, 170)}
            {size.width >= 425 &&
              size.width <= 780 &&
              truncateString(post.body, 170)}
            {size.width < 420 && truncateString(post.body, 80)}
          </p>
        </PostCard>
      ))}
    </Container>
  )
}
