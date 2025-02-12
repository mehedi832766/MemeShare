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
            <div className='w-screen h-screen py-8  text-center bg-[url(../../public/Meme.png)] bg-center bg-cover'>
                <Container>
                    
                      
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