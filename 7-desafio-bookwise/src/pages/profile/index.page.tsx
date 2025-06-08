import React from 'react'
import AppLayout3Cols from '@/layouts/AppLayout3Cols'

export default function ProfilePage() {
  return (
    <div>
      {/* Conteúdo perfil */}
      Conteúdo do perfil
    </div>
  )
}

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout3Cols>{page}</AppLayout3Cols>
}
