import { Header } from "./components/header"
import {Post} from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>         
        <main>
          <Post 
            author="Pedro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet ullam nesciunt, dolores inventore sed tenetur ab dicta fugit placeat laborum quisquam obcaecati! Deserunt, magnam eaque similique iusto a aperiam."
          />
          <Post
            author="Joao"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet ullam nesciunt, dolores inventore sed tenetur ab dicta fugit placeat laborum quisquam obcaecati! Deserunt, magnam eaque similique iusto a aperiam."
          />
        </main>
      </div>
    </div>
  )
}


