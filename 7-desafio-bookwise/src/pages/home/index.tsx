import React from 'react'
import AppLayout3Cols from '@/layouts/AppLayout3Cols'

export default function HomePage() {
  return <div>Home</div>
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout3Cols>{page}</AppLayout3Cols>
}
