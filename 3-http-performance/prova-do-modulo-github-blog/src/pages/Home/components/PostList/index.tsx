import { Container, PostCard } from './styles'

export function PostList() {
  function truncateString(str: string, maxLength: number) {
    return str?.length > maxLength ? str?.slice(0, maxLength) + '...' : str
  }

  console.log(truncateString('JavaScript é incrível!', 10)) // "JavaScript..."

  return (
    <Container>
      {[
        {
          title: 'JavaScript data types and data structures',
          description:
            'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
        },
        {
          title: 'Titulo 1',
          description:
            'A principal noticia saiu hoje sobre a geopolitica global',
        },
        {
          title: 'Titulo 1',
          description:
            'A principal noticia saiu hoje sobre a geopolitica global',
        },
        {
          title: 'Titulo 1',
          description:
            'A principal noticia saiu hoje sobre a geopolitica global',
        },
        {
          title: 'Titulo 1',
          description:
            'A principal noticia saiu hoje sobre a geopolitica global',
        },
      ].map((post) => (
        <PostCard key={post.title + post.description}>
          <header>
            <h3>{post.title}</h3>
            <span>Há 1 dia</span>
          </header>
          <p>{truncateString(post.description, 181)}</p>
        </PostCard>
      ))}
    </Container>
  )
}
