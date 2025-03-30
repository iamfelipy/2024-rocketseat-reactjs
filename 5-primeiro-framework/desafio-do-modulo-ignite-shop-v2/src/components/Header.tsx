import { Handbag } from "@phosphor-icons/react/dist/ssr"
import { ShoppingCart } from "./ShoppingCart"
import logoImg from '../assets/logo.svg'
import Image from 'next/future/image'
import { useShoppingCart } from "use-shopping-cart"
import {Container} from '../styles/components/Header'

export function Header() {
  const { handleCartClick, cartCount } = useShoppingCart();
  
  return (
    <Container>
      <Image src={logoImg} width="130" height="52" alt=""/>
      <button onClick={(e) => handleCartClick()}>
        <Handbag size="2rem" weight="bold" />
      </button>
      <ShoppingCart />
    </Container>
  )
}