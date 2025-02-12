import React,{useEffect, useState} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { allposts } from '../store/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from "react-router-dom";

function MyPosts() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
   const userData = useSelector((state) => state.auth.userData);
  const userId = userData.$id;
  const posts = useSelector((state)=>state.post.postData)
  
  const MyPosts = posts.filter((post)=> post.userId === userId)

  console.log(MyPosts.length);
  
  
    
    return MyPosts.length === 0 ? 
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
                    {(MyPosts).map((post)=> (
                   
                        <div key={post.$id} className='p-2 w-full sm:w-1/4'>
                            
                            <PostCard {...post}/>
                   
                        </div>
                   
                        ))
                        
                        }
                </div>
            </Container>
        </div>)
    }


export default MyPosts