import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

// author: (avatar_url: "", name: "", role: "")
// publishedAt: Date
// Content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabrielvicente1.png',
      name: 'Gabriel Vicente',
      role: 'Jovem Aprendiz'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
     {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-04-09 10:41:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Joaomos.png',
      name: 'João Marcos',
      role: 'Analista de TI'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
     {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-04-03 20:57:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
             />
            )
          })}
        </main>
      </div>
    </div>
  );
}
