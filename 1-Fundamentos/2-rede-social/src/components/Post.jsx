import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import {Comment} from './Comment'

import styles from './Post.module.css'

export function Post({author, content, publishedAt}){

    // trabalhando com datas de forma nativa no javascript
    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR',{
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt);
    console.log(publishedAt)
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR
    })
    
    //data relativa a atual
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.authorName}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph') {
                        return (<p>{line.content}</p>)
                    }else if(line.type == 'link') {
                        return (<p><a href="">{line.content}</a></p>)
                    }
                    return <></>
                })}
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}