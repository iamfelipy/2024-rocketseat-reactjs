import styles from './Header.module.css'
import logoToDo from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoToDo} alt="logo da aplicação" />
    </header>
  )
}
