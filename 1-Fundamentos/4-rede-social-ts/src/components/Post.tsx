import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import {Comment} from './Comment'

import styles from './Post.module.css'

interface Author {
    authorName: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
}

interface PostProps {
    post: PostType
}

// interface PostProps {
//     author: {
//         authorName: string;
//         avatarUrl: string;
//         role: string;
//     };
//     content: Array<[]>;
//     publishedAt: Date;
// }

export function Post({post}: PostProps){

    let [comments, setComments] = useState([
        {
            id: 'Adorei seu novo portifa Devon!',
            author: {
                authorName: 'Jenny Wilson',
                avatarUrl: 'https://plus.unsplash.com/premium_photo-1661716909682-d21f1fadb186?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                role: 'DevOps'                
            },
            content: 'Adorei seu novo portifa Devon!',
            likes: 12,
            publishedAt: new Date('2024-02-23 21:13:38')
        },
    ])
    let [newCommentText, setNewCommentText] = useState('')

    // trabalhando com datas de forma nativa no javascript
    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR',{
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt);
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR
    })
    
    //data relativa a atual
    const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt,{
        locale: ptBR,
        addSuffix: true
    })

    /*
        recomendação de prefixo handle no nome da função
        essa função é acionada atraves da ação de um usuário o diego coloca o prefixo handle, seja um clique de um botão ou submit de um formulario
        comportamento padrão de um formualario é redirecionar o usuário para uma pagina, evitar comportamento padrão em SPAs
        O que é o estado de componentes?
            variaveis que eu quero ele monitore, se não houvesse isso precisaria acompanhar o html inteiro 
            eu preciso usar estado para renderizar o componente novamente quando o valor da propriedade mudar
        imutabilidade:
            useState utiliza esse conteito
            eu passo o novo valor inves de passar apenas a alteração
    */
    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        const newCommentFormated = {
            //essa não é a forma correta de gerar um id unico, apenas coloquei para parar o erro de key
            id: newCommentText,
            author: {
                authorName: 'Alexandra fernandes',
                avatarUrl: 'https://images.unsplash.com/photo-1537803340330-1dccb2774801?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                role: ''
            },
            content: newCommentText,
            likes: 30,
            publishedAt: new Date('2024-02-22 21:13:38')
        }

        setComments([...comments,{...newCommentFormated}])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete: string) {
        let commentsWithoutDeleteOne = comments.filter(comment=>{
            return comment.id != commentToDelete
        })
        setComments([...commentsWithoutDeleteOne])

    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.authorName}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>
            <div className={styles.content}>
                {post.content.map(line => {
                    if(line.type == 'paragraph') {
                        return (<p key={line.content}>{line.content}</p>)
                    }else if(line.type == 'link') {
                        return (<p key={line.content}><a href="">{line.content}</a></p>)
                    }
                    return <></>
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um comentário" 
                    onChange={handleNewCommentChange} 
                    required value={newCommentText} 
                    onInvalid={handleNewCommentInvalid} 
                />
                <footer>
                    <button 
                        disabled={isNewCommentEmpty} 
                        type="submit"
                    >
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                        <Comment 
                            key={comment.content}
                            author={comment.author} 
                            content={comment.content}
                            publishedAt={comment.publishedAt} 
                            onDeleteComment={deleteComment}
                        />
                        )
                    })
                }
            </div>
        </article>
    )
}