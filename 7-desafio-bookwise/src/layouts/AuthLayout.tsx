import { styled } from '@/styles'
import Head from 'next/head'
import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
  title?: string
}

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <>
      <Head>
        <title>{title ?? 'BookWise - Login'}</title>
      </Head>
      <AuthContainer>{children}</AuthContainer>
    </>
  )
}

const AuthContainer = styled('main', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',
})
