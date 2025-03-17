import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = () => {
    
    authService.logout().then(()=> {
      localStorage.clear()
      navigate('/')
      dispatch(logout())
      
    })
    
  }
  return (
    <button className='inline-bock  text-white 
    md:text-sm text-2xl 
    font-bold  
    
    border-b-2
    border-gray-800
    hover:border-b-yellow-500
     text-center ' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn