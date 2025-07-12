import '../lib/dayjs'

import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { QueryClientProvider, Hydrate } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'
import { ToastProvider } from '@/contexts/ToastContext'
import { SessionProvider } from 'next-auth/react'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  )
}
export default MyApp
