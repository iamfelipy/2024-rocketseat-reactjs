import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, LoginButton, Overlay } from './styles'
import { GithubLogo, GoogleLogo, X } from 'phosphor-react'
import { ReactNode } from 'react'

type LoginModalProps = {
  children: ReactNode
}

export function LoginModal({ children }: LoginModalProps) {
  const handleLogin = (provider: 'google' | 'github') => {
    // TODO: Implement login logic
    console.log(`Logging in with ${provider}`)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <h2>Faça login para deixar sua avaliação</h2>
          <div>
            <LoginButton onClick={() => handleLogin('google')}>
              <GoogleLogo size={32} />
              Entrar com Google
            </LoginButton>
            <LoginButton onClick={() => handleLogin('github')}>
              <GithubLogo size={32} />
              Entrar com GitHub
            </LoginButton>
          </div>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
