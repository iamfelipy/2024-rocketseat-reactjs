import { useState } from 'react'
import {ThumbsUp, Trash} from '@phosphor-icons/react'
import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'

import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({author,content,publishedAt, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    const publishedAtFormated = format(publishedAt, "do 'de' MMMM y HH:mm'h'", {
        locale: ptBR
    })
    const publishedAtDistanceFormated = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={author.avatarUrl} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author.name}</strong>
                            {/* <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:38">Cerca de 1h atrás</time> */}
                            <time title={publishedAtFormated} dateTime={publishedAt.toISOString()}>{publishedAtDistanceFormated}</time>
                        </div>
                        <button title="deletar comentário" onClick={handleDeleteComment}>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24} /> 
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )

}