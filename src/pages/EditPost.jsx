import React from 'react'
import { Container,PostForm } from '../components'
import appwriteService from "../appwrite/config"
import { useParams ,useNavigate} from 'react-router-dom'
export default function EditPost() {
    const [posts, setPosts] = useState(null)
    const {slug} =useParams()
    const navigate=useNavigate()
    useEffect(() => {
      if(slug){
        appwriteService.getPost(slug).then((post)=>{
            if(post){
                setPosts(post)
            }
        })
      }else{
        navigate('/')
      }
    }, [slug,navigate])
    

  return posts?(
    <div className="py-8">
        <Container>
            <PostForm post={posts} />
        </Container>    
    </div>
  ):null
}
