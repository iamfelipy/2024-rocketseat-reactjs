import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Outlet } from 'react-router'
import { Header } from './components/Header/Header'
import { PostsProvider } from './contexts/PostContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostsProvider>
        <Header />
        <Outlet />
      </PostsProvider>
    </ThemeProvider>
  )
}

export default App
