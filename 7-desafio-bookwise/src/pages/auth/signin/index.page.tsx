import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import {
  Header,
  SignInButtons,
  SignInButton,
  AuthContainer,
  LoginSection,
  LogoSection,
  Logo,
  MobileLogo,
} from './styles'

export default function SignInPage() {
  const handleSignIn = (provider: 'google' | 'github' | 'rocket') => {
    // TODO: Implementar lógica de login com NextAuth
    console.log(`Logging in with ${provider}`)
  }

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
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
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
                src="/images/google-logo-icon.svg"
                alt="Google"
                width={32}
                height={32}
              />
              Entrar com Google
            </SignInButton>

            <SignInButton onClick={() => handleSignIn('github')}>
              <Image
                src="/images/github-logo-icon.svg"
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
        </LoginSection>
      </AuthContainer>
    </>
  )
}
