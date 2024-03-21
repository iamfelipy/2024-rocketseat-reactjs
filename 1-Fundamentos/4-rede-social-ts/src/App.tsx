import {Header} from './components/Header'

import './global.css'
import styles from './App.module.css'
import {Sidebar} from './components/Sidebar'
import {Post, PostType} from './components/Post'
// import type {PostType} from './components/Post'

function App() {

  const posts: PostType[] = [
    {
      id: 1,
      author: {
        authorName: 'Felcam',
        avatarUrl: 'https://plus.unsplash.com/premium_photo-1708275671991-6b8514fc53ee?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        avatarUrl: 'https://images.unsplash.com/photo-1710268503377-7fe212765db8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                  post={post}
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
