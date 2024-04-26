import { HeaderContainer } from './styles'
import coverImg from '../../assets/cover.svg'
import LogoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer urlImg={coverImg}>
      <img src={LogoImg} alt="" />
    </HeaderContainer>
  )
}
