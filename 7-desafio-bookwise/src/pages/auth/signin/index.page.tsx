import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import {
  Header,
  SignInButtons,
  SignInButton,
  AuthContainer,
  LoginSection,
  LogoSection,
  Logo,
  MobileLogo,
  AuthError,
} from './styles'

export default function SignInPage() {
  const { status } = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = status === 'authenticated'

  const errorMessages: Record<string, string> = {
    OAuthSignin: 'Erro ao iniciar login com o Google.',
    OAuthCallback: 'Erro ao completar login com o Google.',
    AccessDenied: 'Acesso negado. Tente novamente.',
    OAuthAccountNotLinked: 'Essa conta já está vinculada a outro login.',
    permissions:
      'Permissões insuficientes. Verifique se você habilitou o acesso ao email e perfil.',
    default: 'Erro desconhecido. Tente novamente.',
  }

  const errorMessage =
    errorMessages[router.query.error as string] || errorMessages.default

  const handleSignIn = async (provider: 'google' | 'github' | 'rocket') => {
    if (provider === 'rocket') {
      await router.push('/')
      return
    }

    try {
      await signIn(provider, {
        callbackUrl: '/',
      })
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  React.useEffect(() => {
    if (isSignedIn) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn])

  return (
    <>
      <Head>
        <title>BookWise - Entrar</title>
      </Head>
      <AuthContainer>
        <LogoSection>
          <Logo>
            <Image
              src="/images/mdi_book-heart-outline.svg"
              width="48"
              height="48"
              alt="BookWise Logo"
            />
            BookWise
          </Logo>
          <Image
            src="/images/background-login.png"
            alt="Pessoa lendo um livro em um sofá"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
            sizes="100vw"
          />
        </LogoSection>

        <LoginSection>
          <MobileLogo>
            <Image
              src="/images/mdi_book-heart-outline.svg"
              width="48"
              height="48"
              alt="BookWise Logo"
            />
            BookWise
          </MobileLogo>
          <Header>
            <h1>Boas vindas!</h1>
            <p>Faça seu login ou acesse como visitante.</p>
          </Header>

          <SignInButtons>
            <SignInButton onClick={() => handleSignIn('google')}>
              <Image
                src="/images/icon-google.svg"
                alt="Google"
                width={32}
                height={32}
              />
              Entrar com Google
            </SignInButton>

            <SignInButton onClick={() => handleSignIn('github')}>
              <Image
                src="/images/icon-github.svg"
                alt="GitHub"
                width={32}
                height={32}
              />
              Entrar com GitHub
            </SignInButton>

            <SignInButton onClick={() => handleSignIn('rocket')}>
              <Image
                src="/images/rocket-launch-icon.svg"
                alt="Rocket"
                width={32}
                height={32}
              />
              Acessar como visitante
            </SignInButton>
          </SignInButtons>

          {hasAuthError && <AuthError>{errorMessage}</AuthError>}
        </LoginSection>
      </AuthContainer>
    </>
  )
}
