import React,{useEffect, useState} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { allposts } from '../store/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from "react-router-dom";

function MyPosts() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const {userId} = useParams();
    // const postCount = useSelector((state)=>state.post.postData)
    
    const [posts, setPosts] = useState([])
    // let posts
    useEffect(()=>{
        // console.log("useEffect");
        appwriteService.getPosts().then((posts)=>{
            if(posts) {
                // console.log(posts)
                    // console.log("promise");
                    setPosts(posts.documents)                    
            }
    
    
        })
        .finally(() => setLoading(false));

        // posts = useSelector((state)=>state.post.postData)
        
        
    },[])
    // setPosts(useSelector((state)=>state.post.postData))
    // useEffect(() => {}, [])
    // 
    // console.log(posts);
    // setPosts(useSelector((state)=>state.post.postData))
   
               
    

    // (posts.filter((post)=> post.userId === userData.$id)).map
    return loading ? 
    (
        
        
         
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                You have not posted anything yet
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    :

        ( <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {(posts).map((post)=> (
                   (post.userId === userId)?
                        <div key={post.$id} className='p-2 w-full sm:w-1/4'>
                            
                            <PostCard {...post}/>
                   
                        </div>
                   : null
                        ))
                        
                        }
                </div>
            </Container>
        </div>)
    }


export default MyPosts