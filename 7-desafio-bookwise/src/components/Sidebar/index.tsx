import { Wrapper, Container } from './styles'
import { SidebarContent } from './SidebarContent'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const { pathname } = useRouter()
  const isAuthenticated = true // ou sua lógica real

  const signOut = () => {}
  const signIn = () => {}

  return (
    <Wrapper>
      <Container>
        <SidebarContent
          pathname={pathname}
          isAuthenticated={isAuthenticated}
          onSignIn={signIn}
          onSignOut={signOut}
        />
      </Container>
    </Wrapper>
  )
}
