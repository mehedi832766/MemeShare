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
     
      dispatch(logout())
      navigate('/')
    })
    
  }
  return (
    <button className='inline-bock px-6 py-2 duration-200 md:border-b-2 border-gray-600 hover:border-b-yellow-500 hover:text-white text-2xl text-center ' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn