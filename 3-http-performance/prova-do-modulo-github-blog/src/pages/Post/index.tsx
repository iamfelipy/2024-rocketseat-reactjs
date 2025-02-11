import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  NavigationButtons,
  PostContainer,
  PostMetaHeader,
  PostTitle,
  PostMetaItemContainer,
  PostContent,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Markdown from 'react-markdown'
import { useContext, useEffect } from 'react'
import { PostContext } from '../../contexts/PostContext'

export function Post() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getPost, post } = useContext(PostContext)
  useEffect(() => {
    getPost(Number(id))
  }, [])

  function handleGoBack() {
    navigate('/')
  }

  return (
    <main>
      <PostContainer>
        <PostMetaHeader>
          <NavigationButtons>
            <button onClick={handleGoBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
              &nbsp;&nbsp;&nbsp;<span>VOLTAR</span>
            </button>
            <Link
              to={`https://github.com/iamfelipy/2024-rocketseat-reactjs/issues/${id}`}
            >
              <button>
                <span>VER NO GITHUB</span>&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
            </Link>
          </NavigationButtons>
          <PostTitle>{post.title}</PostTitle>
          <PostMetaItemContainer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{post.user.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>
                {formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>{post.comments} comentarios</span>
            </div>
          </PostMetaItemContainer>
        </PostMetaHeader>
        <PostContent>
          <Markdown>{post.body}</Markdown>
        </PostContent>
      </PostContainer>
    </main>
  )
}
