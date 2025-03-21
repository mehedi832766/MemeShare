import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function PostCard({$id, title, featuredImage}) {
  
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-500 rounded-xl p-4 shadow-2xl shadow-yellow-500/30'>
        <div className='w-full justify-center mb-4 '>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl w-full h-76 object-cover' />
        </div>

        <h2 className='text-xl font-bold text-white'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard