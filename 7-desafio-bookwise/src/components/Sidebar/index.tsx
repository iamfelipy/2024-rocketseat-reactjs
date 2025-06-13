import { Wrapper, Container } from './styles'
import { NavigationContent } from '../shared/NavigationContent'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const { pathname } = useRouter()
  const isAuthenticated = true // ou sua lógica real

  const signOut = () => {}
  const signIn = () => {}

  return (
    <Wrapper>
      <Container>
        <NavigationContent
          pathname={pathname}
          isAuthenticated={isAuthenticated}
          onSignIn={signIn}
          onSignOut={signOut}
        />
      </Container>
    </Wrapper>
  )
}
