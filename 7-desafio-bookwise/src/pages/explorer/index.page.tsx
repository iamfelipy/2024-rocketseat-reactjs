import React from 'react'
import AppLayout2Cols from '@/layouts/AppLayout2Cols'

export default function ExplorerPage() {
  return (
    <div>
      {/* Conteúdo explorar */}
      Conteúdo da exploração
    </div>
  )
}

ExplorerPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout2Cols>{page}</AppLayout2Cols>
}
