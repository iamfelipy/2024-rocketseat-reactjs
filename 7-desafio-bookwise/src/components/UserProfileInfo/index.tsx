import { useState } from 'react'
import { Avatar } from '@/components/Avatar'
import {
  BookOpen,
  Books,
  UserList,
  BookmarkSimple,
  CaretDown,
  CaretUp,
} from 'phosphor-react'
import {
  UserProfileInfoWrapper,
  Divider,
  InfoItem,
  InfoLabel,
  InfoValue,
  InfoList,
  MemberSince,
  UserName,
  AccordionToggle,
  AccordionContent,
  AccordionContentWrapper,
} from './styles'

interface UserProfileInfoProps {
  profile?: {
    id: string
    name: string
    avatarUrl: string | null
    createdAt: string
    stats: {
      totalReviews: number
      totalPages: number
      averageRating: number
      mostReadAuthor: string
    }
  }
}

export function UserProfileInfo({ profile }: UserProfileInfoProps) {
  const [open, setOpen] = useState(false)

  // Format member since date
  const memberSince = profile?.createdAt
    ? new Date(profile.createdAt).getFullYear().toString()
    : 'N/A'

  return (
    <UserProfileInfoWrapper>
      <AccordionToggle onClick={() => setOpen((v) => !v)}>
        <span>Ver perfil</span>
        {open ? <CaretUp size={24} /> : <CaretDown size={24} />}
      </AccordionToggle>
      <AccordionContent data-open={open}>
        <AccordionContentWrapper>
          <Avatar
            src={profile?.avatarUrl || '/images/avatar-1.jpg'}
            alt={profile?.name || 'User'}
            width={72}
            height={72}
            borderSize={2}
          />
          <UserName>{profile?.name || 'Usuário'}</UserName>
          <MemberSince>membro desde {memberSince}</MemberSince>
          <Divider />
          <InfoList>
            <InfoItem>
              <BookOpen size={32} />
              <div>
                <InfoValue>{profile?.stats.totalPages || 0}</InfoValue>
                <InfoLabel>Páginas lidas</InfoLabel>
              </div>
            </InfoItem>
            <InfoItem>
              <Books size={32} />
              <div>
                <InfoValue>{profile?.stats.totalReviews || 0}</InfoValue>
                <InfoLabel>Livros avaliados</InfoLabel>
              </div>
            </InfoItem>
            <InfoItem>
              <UserList size={32} />
              <div>
                <InfoValue>{profile?.stats.averageRating || 0}</InfoValue>
                <InfoLabel>Média das avaliações</InfoLabel>
              </div>
            </InfoItem>
            <InfoItem>
              <BookmarkSimple size={32} />
              <div>
                <InfoValue>{profile?.stats.mostReadAuthor || 'N/A'}</InfoValue>
                <InfoLabel>Autor mais lido</InfoLabel>
              </div>
            </InfoItem>
          </InfoList>
        </AccordionContentWrapper>
      </AccordionContent>
    </UserProfileInfoWrapper>
  )
}
