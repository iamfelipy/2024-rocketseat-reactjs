import {
  HeaderContainer,
  UserInfo,
  UserText,
  UserName,
  UserDate,
  RatingContainer,
} from './styles'
import StarRating from '@/components/StarRating'
import { Avatar } from '@/components/Avatar'

interface BookCardHeaderProps {
  user: {
    name: string
    avatarUrl: string
  }
  date: string
  rating: number
}

export function BookCardHeader({
  user,
  date,
  rating,
  ...props
}: BookCardHeaderProps) {
  return (
    <HeaderContainer {...props}>
      <UserInfo>
        <Avatar src={user.avatarUrl} alt={user.name} width={38} height={38} />
        <UserText>
          <UserName>{user.name}</UserName>
          <UserDate>{date}</UserDate>
        </UserText>
      </UserInfo>
      <RatingContainer>
        <StarRating rating={rating} />
      </RatingContainer>
    </HeaderContainer>
  )
}
