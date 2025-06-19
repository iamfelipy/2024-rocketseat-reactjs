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

export function UserProfileInfo() {
  const [open, setOpen] = useState(false)

  return (
    <UserProfileInfoWrapper>
      <AccordionToggle onClick={() => setOpen((v) => !v)}>
        <span>Ver perfil</span>
        {open ? <CaretUp size={24} /> : <CaretDown size={24} />}
      </AccordionToggle>
      <AccordionContent data-open={open}>
        <AccordionContentWrapper>
          <Avatar
            src="/images/avatar-1.jpg"
            alt="Cristofer Rosser"
            width={72}
            height={72}
            borderSize={2}
          />
          <UserName>Cristofer Rosser</UserName>
          <MemberSince>membro desde 2019</MemberSince>
          <Divider />
          <InfoList>
            <InfoItem>
              <BookOpen size={32} />
              <div>
                <InfoValue>3853</InfoValue>
                <InfoLabel>Páginas lidas</InfoLabel>
              </div>
            </InfoItem>
            <InfoItem>
              <Books size={32} />
              <div>
                <InfoValue>10</InfoValue>
                <InfoLabel>Livros avaliados</InfoLabel>
              </div>
            </InfoItem>
            <InfoItem>
              <UserList size={32} />
              <div>
                <InfoValue>8</InfoValue>
                <InfoLabel>Autores lidos</InfoLabel>
              </div>
            </InfoItem>
            <InfoItem>
              <BookmarkSimple size={32} />
              <div>
                <InfoValue>Computação</InfoValue>
                <InfoLabel>Categoria mais lida</InfoLabel>
              </div>
            </InfoItem>
          </InfoList>
        </AccordionContentWrapper>
      </AccordionContent>
    </UserProfileInfoWrapper>
  )
}
