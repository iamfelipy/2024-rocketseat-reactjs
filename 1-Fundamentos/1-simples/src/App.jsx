import { useState } from 'react'
import Caixa from './Caixa';
import {Button} from './Button';
import {Post} from './Post';

export function App() {

  return (
    <>
      <Caixa />
      <Caixa />
      <Caixa />
      <Button />
      <Post author="Felcam" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic corporis error tempora unde accusamus aliquam ullam! Minus, corporis cum ipsam, eveniet debitis quae delectus voluptas quam quidem adipisci fugit veritatis.
Est maxime inventore optio reprehenderit vitae soluta quasi aperiam consequuntur laboriosam natus repudiandae cumque odit debitis amet blanditiis, eligendi deserunt, eos iure. Rem cum temporibus consequatur aperiam nostrum eum repellat?
Nemo libero delectus pariatur deserunt voluptate eveniet iste odit a vero consectetur aperiam, non doloremque harum placeat accusantium aliquid architecto velit enim, nesciunt blanditiis reiciendis, dignissimos corrupti ex ipsa? Odio." />
      <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
    </>
  )
}

