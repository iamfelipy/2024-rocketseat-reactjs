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
  created_at: string | Date
  user: {
    login: string
  }
  comments: number
}

interface PostContextType {
  post: Post
  posts: Post[]
  fetchPosts: (query: string) => Promise<void>
  getPost: (id: number) => Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [post, setPost] = useState<Post>({
    title: '',
    body: '',
    number: 0,
    created_at: new Date(),
    user: {
      login: '',
    },
    comments: 0,
  })

  const fetchPosts = useCallback(async (query: string = '') => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:iamfelipy/2024-rocketseat-reactjs`,
      },
    })

    const posts = response?.data?.items ?? []
    setPosts([...posts])
  }, [])

  const getPost = useCallback(async (id: number) => {
    const response = await api.get(
      `/repos/iamfelipy/2024-rocketseat-reactjs/issues/${id}`,
    )
    const post = response?.data ?? []
    setPost({ ...post })
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostContext.Provider value={{ posts, fetchPosts, getPost, post }}>
      {children}
    </PostContext.Provider>
  )
}
