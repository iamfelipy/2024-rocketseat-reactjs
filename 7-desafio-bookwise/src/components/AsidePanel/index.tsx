import { styled } from '@/styles'

export default function AsidePanel() {
  return (
    <Container>
      <Title>Recomendações</Title>
      <p>📖 Livro em destaque</p>
      <p>🏆 Ranking semanal</p>
    </Container>
  )
}

const Container = styled('aside', {
  borderLeft: '1px solid $gray700',
  padding: '$4',
  backgroundColor: '$gray900',
})

const Title = styled('h2', {
  fontSize: '$lg',
  marginBottom: '$4',
})
