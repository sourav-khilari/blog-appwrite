import React,{useState,useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container,PostCard } from '../components'


export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      appwriteService.getPost().then((post)=>{
        if(post){
            setPosts(post.documents)
            console.log(post);
            console.log(post.length);
            console.log(post.documents);
            
            
            
        }  
        console.log(post.documents);
        console.log(post);
        console.log(posts.length);  
      })
    }, [])
    
  if(posts.length ===0){
    return(
        <div className="w-full py-8 mt-4 text-center">
        
            <div className="flex flex-wrap">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Login to read posts
                    </h1>
                </div>
            </div>
        
    </div>
    )
  }
  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
    </Container>
</div>

  )
}
