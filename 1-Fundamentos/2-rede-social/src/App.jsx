import {Header} from './components/Header'

import './global.css'
import styles from './App.module.css'
import {Sidebar} from './components/Sidebar'
import {Post} from './components/Post'

function App() {

  const posts = [
    {
      id: 1,
      author: {
        authorName: 'Felcam',
        avatarUrl: 'https://encurtador.com.br/bdTZ1',
        role: 'Full-Stack Developer'
      },
      content: [
        {
          type: 'paragraph', content: 'Fala galeraa 👋',
        },
        {
          type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
        },
        {
          type: 'link', content: '👉 jane.design/doctorcare',
        }
      ],
      publishedAt: new Date('2024-02-23 15:13:30'),
    },
    {
      id: 2,
      author: {
        authorName: 'Vitor Antonio',
        avatarUrl: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e19559115aa488fd4cb9438cd24d1955~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1708891200&x-signature=cj1O9QMALTXCzeH%2Fe93DLnyMTTA%3D',
        role: 'Dev Front-End'
      },
      content: [
        {type: 'paragraph', content: 'Vitor antonio aqui 👋'},
        {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
        {type: 'link', content: 'github.com/vitor_dev'},
      ],
      publishedAt: new Date('2024-02-23 15:13:30'),
    }
  ]

  /*
    author = {
        name: '',
        avatar_url: '',
        role: ''
    }
    content: String
    publisedAt: Date
        -3 formatos
        -distancia
        -data completa
        -data escrita
  */

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author} 
                  content={post.content}
                  publishedAt={post.publishedAt} 
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
