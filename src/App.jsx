import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Vicente Sales Fonseca"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a aperiam nihil expedita quibusdam voluptate alias molestiae rerum est, magnam assumenda, porro voluptatem, saepe eos recusandae officiis illo. Quas, modi."
          />
          <Post
            author="Gabriel Sales"
            content="content very cool"
          />
        </main>
      </div>
    </div>
  );
}
