import { PostList } from './components/PostList'
import { ProfileSummary } from './components/ProfileSummary'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <ProfileSummary />
      <SearchBar />
      <PostList />
    </Container>
  )
}
