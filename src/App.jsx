import {Post} from "./Post"

export function App() {
  return (
    <div>
      <Post 
        author ="José" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores in esse aspernatur vitae quisquam sunt suscipit libero officiis nobis cum qui, similique, error ipsam dolore deleniti aliquam voluptatem est illum?"
      />
      <Post 
        author ="João" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores in esse aspernatur vitae quisquam sunt suscipit libero officiis nobis cum qui, similique, error ipsam dolore deleniti aliquam voluptatem est illum?"
      />
    </div>
  )
}


