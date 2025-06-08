import React from 'react'
import AuthLayout from '@/layouts/AuthLayout'

export default function AuthPage() {
  return (
    <div>
      {/* Conteúdo do login */}
      Login form aqui
    </div>
  )
}

AuthPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>
}
