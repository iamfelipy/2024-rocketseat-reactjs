import { ReactNode, ReactElement } from 'react'
import type { AppProps } from 'next/app'

type NextPageWithLayout = AppProps['Component'] & {
  getLayout?: (page: ReactElement) => ReactNode
}

function MyApp({ Component, pageProps }: AppProps) {
  const Comp = Component as NextPageWithLayout

  const getLayout = Comp.getLayout ?? ((page) => page)

  return getLayout(<Comp {...pageProps} />)
}

export default MyApp
