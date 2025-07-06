import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, LoginButton, Overlay } from './styles'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'
import Image from 'next/image'

type LoginModalProps = {
  children: ReactNode
  isAuthenticated?: boolean
}

export function LoginModal({
  children,
  isAuthenticated = false,
}: LoginModalProps) {
  const handleLogin = (provider: 'google' | 'github') => {
    // TODO: Implement login logic
    console.log(`Logging in with ${provider}`)
  }

  // If user is authenticated, just render children without modal
  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Faça login para deixar sua avaliação</Dialog.Title>
          <Dialog.Description hidden>
            Entre com sua conta para poder avaliar este livro
          </Dialog.Description>
          <CloseButton>
            <X size={24} />
          </CloseButton>
          <div>
            <LoginButton onClick={() => handleLogin('google')}>
              <Image
                src="/images/icon-google.svg"
                alt="Google"
                width={32}
                height={32}
              />
              Entrar com Google
            </LoginButton>
            <LoginButton onClick={() => handleLogin('github')}>
              <Image
                src="/images/icon-github.svg"
                alt="GitHub"
                width={32}
                height={32}
              />
              Entrar com GitHub
            </LoginButton>
          </div>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
