import React,{useEffect, useState} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { allposts } from '../store/postSlice'
import { useSelector, useDispatch } from 'react-redux'



function Home() {
   
    
   
    const dispatch = useDispatch()
   
    
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        
        appwriteService.getPosts().then((posts)=>{
            if(posts) {
                
                    dispatch(allposts(posts))
                    
                    setPosts(posts.documents)                    
            }
        })
    },[])
   
               
    // const posts = useSelector((state)=>state.post.postData.documents)

    // (posts.filter((post)=> post.userId === userData.$id)).map
    
    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else {
       return ( <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.slice(0, 4).map((post)=> (
                        <div key={post.$id} className='p-2 w-full sm:w-1/4'>
                            <PostCard {...post}/>
                        </div>
                        ))
                        
                        }
                </div>
            </Container>
        </div>)
    }
}

export default Home