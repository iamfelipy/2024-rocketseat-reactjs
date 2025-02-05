import { PostList } from './components/PostList'
import { ProfileSummary } from './components/ProfileSummary'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <ProfileSummary />
      <PostList />
    </Container>
  )
}
