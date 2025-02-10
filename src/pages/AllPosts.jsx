import React, { useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config"
import authService from "../appwrite/auth"
import { useState } from 'react';
import { useSelector } from 'react-redux'


function AllPosts() {

    
    const [loading, setLoading] = useState(true);

    const posts = useSelector((state)=>state.post.postData)
   
    
  

    return (<div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                 <div key={post.$id} className='p-2 w-full sm:w-1/4'>
                <PostCard {...post} />
            </div>
        
            ))}
        </div>
       
    </Container>
    </div>
  )

}

export default AllPosts