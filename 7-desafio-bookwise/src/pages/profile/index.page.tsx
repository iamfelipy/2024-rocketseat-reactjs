import React, { useEffect, useState } from 'react'
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
import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const reviewsData = [
  {
    id: 3,
    title: 'Entendendo Algoritmos',
    author: { id: 1, name: 'Aditya Bhargava' },
    imageUrl: '/images/book-algoritmos.png',
    rating: 4,
    createdAt: new Date('2025-06-13T10:00:00.000Z'),
    descriptionBottom:
      'Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.\nProin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.',
  },
  {
    id: 2,
    title: 'O guia do mochileiro das galáxias',
    author: { id: 2, name: 'Douglas Adams' },
    imageUrl: '/images/book-o-guia-do-mochileiro-das-galaxias.png',
    rating: 5,
    createdAt: new Date('2025-06-10T15:30:00.000Z'),
    descriptionBottom:
      'Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.\nProin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.',
  },
  {
    id: 4,
    title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
    author: { id: 3, name: 'Zeno Rocha' },
    imageUrl: '/images/book-habitos.png',
    rating: 4,
    createdAt: new Date('2025-06-08T09:15:00.000Z'),
    descriptionBottom:
      'Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.\nProin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.',
  },
]

type Review = (typeof reviewsData)[0]

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormData = z.infer<typeof searchFormSchema>

// Função de busca que simula uma chamada de API
const fetchReviews = async (query: string): Promise<Review[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300)) // Simula latência da rede

  if (!query) {
    return reviewsData // Retorna tudo se a busca estiver vazia
  }

  const lowerCaseQuery = query.toLowerCase()
  return reviewsData.filter(
    (review) =>
      review.title.toLowerCase().includes(lowerCaseQuery) ||
      review.author.name.toLowerCase().includes(lowerCaseQuery),
  )
}

export default function ProfilePage() {
  const { register, watch } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  const searchQuery = watch('query')

  // Debounce: Atraso para evitar buscas a cada tecla digitada
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 500) // Atraso de 500ms

    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  // O useQuery agora depende da busca "debounced"
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ['reviews', debouncedSearchQuery], // A chave da query inclui o termo da busca
    queryFn: () => fetchReviews(debouncedSearchQuery), // A função de busca recebe o termo
  })

  const reviewsExist = reviews && reviews.length > 0

  return (
    <AppLayout3Cols left={<Sidebar />} right={<UserProfileInfo />}>
      <Main>
        <Header>
          <PageTitle>
            <User size={32} weight="bold" />
            Perfil
          </PageTitle>
          <SearchInputContainer>
            <SearchInput
              placeholder="Buscar livro avaliado"
              {...register('query')}
            />
          </SearchInputContainer>
        </Header>
        <RecentReviewsList>
          {isLoading && <p>Buscando avaliações...</p>}
          {!isLoading &&
            reviewsExist &&
            reviews.map((review) => (
              <SectionWithHeader
                key={review.id}
                title={dayjs(review.createdAt).fromNow()}
              >
                <BookCard
                  css={{
                    padding: '$6',
                    marginBottom: '1rem',
                  }}
                  imageWidth={108}
                  imageHeight={152}
                  book={{
                    id: review.id,
                    title: review.title,
                    author: {
                      id: review.author.id,
                      name: review.author.name,
                    },
                    imageUrl: review.imageUrl,
                    rating: review.rating,
                  }}
                  createdAt={review.createdAt}
                  showRating
                  descriptionBottom={review.descriptionBottom}
                />
              </SectionWithHeader>
            ))}
          {!isLoading && !reviewsExist && (
            <p>Nenhuma avaliação encontrada para esta busca.</p>
          )}
        </RecentReviewsList>
      </Main>
    </AppLayout3Cols>
  )
}
