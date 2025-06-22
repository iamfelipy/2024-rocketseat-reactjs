import React from 'react'
import AppLayout3Cols from '@/layouts/AppLayout3Cols'
import Sidebar from '@/components/Sidebar'
import { UserProfileInfo } from '@/components/UserProfileInfo'
import { User } from 'phosphor-react'
import Main from '@/components/Main'
import { SectionWithHeader } from '@/components/SectionWithHeader'
import BookCard from '@/components/BookCard'
import {
  Header,
  PageTitle,
  RecentReviewsList,
  SearchInputContainer,
} from '@/pages/profile/styles'
import dayjs from 'dayjs'
import { SearchInput } from '@/components/SearchInput'

export default function ProfilePage() {
  // Datas das avaliações
  const firstReviewDate = new Date('2025-06-13T10:00:00.000Z')
  const secondReviewDate = new Date('2025-06-10T15:30:00.000Z')
  const thirdReviewDate = new Date('2025-06-08T09:15:00.000Z')

  // Formatando as datas relativas
  const firstReviewRelativeDate = dayjs(firstReviewDate).fromNow()
  const secondReviewRelativeDate = dayjs(secondReviewDate).fromNow()
  const thirdReviewRelativeDate = dayjs(thirdReviewDate).fromNow()

  return (
    <AppLayout3Cols left={<Sidebar />} right={<UserProfileInfo />}>
      <Main>
        <Header>
          <PageTitle>
            <User size={32} weight="bold" />
            Perfil
          </PageTitle>
          <SearchInputContainer>
            <SearchInput placeholder="Buscar livro avaliado" />
          </SearchInputContainer>
        </Header>
        <RecentReviewsList>
          <SectionWithHeader title={`${firstReviewRelativeDate}`}>
            <BookCard
              css={{
                padding: '$6',
                marginBottom: '1rem',
              }}
              imageWidth={108}
              imageHeight={152}
              book={{
                id: 3,
                title: 'Entendendo Algoritmos',
                author: 'Aditya Bhargava',
                imageUrl: '/images/book-algoritmos.png',
                rating: 4,
              }}
              createdAt={firstReviewDate}
              showRating
              descriptionBottom="Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
    Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque."
            />
          </SectionWithHeader>
          <SectionWithHeader title={`${secondReviewRelativeDate}`}>
            <BookCard
              css={{
                padding: '$6',
                marginBottom: '1rem',
              }}
              imageWidth={108}
              imageHeight={152}
              book={{
                id: 2,
                title: 'O guia do mochileiro das galáxias',
                author: 'Douglas Adams',
                imageUrl: '/images/book-o-guia-do-mochileiro-das-galaxias.png',
                rating: 5,
              }}
              createdAt={secondReviewDate}
              showRating
              descriptionBottom="Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
    Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque."
            />
          </SectionWithHeader>
          <SectionWithHeader title={`${thirdReviewRelativeDate}`}>
            <BookCard
              css={{
                padding: '$6',
                marginBottom: '1rem',
              }}
              imageWidth={108}
              imageHeight={152}
              book={{
                id: 4,
                title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
                author: 'Zeno Rocha',
                imageUrl: '/images/book-habitos.png',
                rating: 4,
              }}
              createdAt={thirdReviewDate}
              showRating
              descriptionBottom="Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
    Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque."
            />
          </SectionWithHeader>
        </RecentReviewsList>
      </Main>
    </AppLayout3Cols>
  )
}
