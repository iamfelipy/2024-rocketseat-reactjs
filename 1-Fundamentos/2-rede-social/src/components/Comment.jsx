import {ThumbsUp, Trash} from '@phosphor-icons/react'

import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jenny Wilson</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:38">Cerca de 1h atrás</time>
                        </div>
                        <button title="deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Adorei seu novo portifa Devon!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={24} /> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )

}