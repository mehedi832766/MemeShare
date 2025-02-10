import React,{useEffect, useState} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { allposts } from '../store/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import {Query } from "appwrite";



function Home() {
   
    
   
    const dispatch = useDispatch()
   
    
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        // queries=
        appwriteService.getPosts([
            Query.equal("status", "active"),
            Query.orderDesc("$createdAt")
        ]
    ).then((posts)=>{
            if(posts) {
                
                dispatch(allposts(posts))
                    
                    setPosts(posts.documents)                    
            }
        })
    },[])
   
               

    
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