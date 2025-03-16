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
    <button className='inline-bock px-6 py-0.5  text-white font-bold  md:hover:border-b-2 hover:border-b-yellow-500 hover:text-white text-2xl md:border-0  text-center ' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn