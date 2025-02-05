import {
  Container,
  NameAndLinkProfileGithub,
  SocialMediasContainer,
  UserDescription,
  UserInfo,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { z } from 'zod'

export const GitHubUserSchema = z.object({
  avatar_url: z.string().url(),
  name: z.string().nullable(),
  html_url: z.string().url(),
  bio: z.string().nullable(),
  login: z.string(),
  company: z.string().nullable(),
  followers: z.number().int().nonnegative(),
})

type IGitHubUser = z.infer<typeof GitHubUserSchema>

export function ProfileSummary() {
  const [userData, setUserData] = useState<IGitHubUser | null>()

  useEffect(() => {
    async function FetchData() {
      try {
        const { data } = await api.get('/users/iamfelipy')

        GitHubUserSchema.parse(data)

        setUserData(data)
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error)
      }
    }

    FetchData()
  }, [])

  return (
    <Container>
      {userData && (
        <>
          <img src={userData.avatar_url} alt="image do perfil no github" />
          <UserInfo>
            <NameAndLinkProfileGithub>
              <span>{userData.name}</span>
              <a href={userData.html_url}>
                <span>GITHUB</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </NameAndLinkProfileGithub>
            <UserDescription>{userData.bio}</UserDescription>
            <SocialMediasContainer>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <span> {userData.login}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{userData.company}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{userData.followers} seguidores</span>
              </div>
            </SocialMediasContainer>
          </UserInfo>
        </>
      )}
    </Container>
  )
}
