import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink
          to="/2024-rocketseat-reactjs/2-aprofundando-em-hooks/to-do-project/dist"
          title="Timer"
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/2024-rocketseat-reactjs/2-aprofundando-em-hooks/to-do-project/dist/history"
          title="HIstorico"
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
