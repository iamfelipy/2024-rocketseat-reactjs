import { Avatar } from './Avatar';
import { PencilLine } from "@phosphor-icons/react";
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
          <img className={styles.cover} src="https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVuaXZlcnNlfGVufDB8fDB8fHww" alt="imagem de capa" />
          <div className={styles.profile}>
            <Avatar hasBorder src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <strong>Michele</strong>
            <span>Web Developer</span>
          </div>       
          <footer>
            <a href="#">
              <PencilLine size={20} />Editar seu perfil
            </a>
          </footer>
        </aside>
        
    )
}