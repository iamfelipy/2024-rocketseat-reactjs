import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Post {
  title: string
  body: string
  number: number
  created_at: string
}

interface PostContextType {
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (query: string = '') => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:iamfelipy/2024-rocketseat-reactjs`,
      },
    })

    const posts = response?.data?.items ?? []
    setPosts([...posts])
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  )
}
