import { usePosts } from "../contexts/PostContext";

const Footer = () => {
  const postCtx = usePosts();


  return (
    <>
      <footer>
        Total de posts: { postCtx?.posts.length }
      </footer> 
    </>
  )
}

export default Footer
