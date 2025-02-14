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
    <button className='inline-bock px-6 py-0.5 duration-200  text-white font-bold border-white-600 md:hover:border-b-2 hover:border-b-yellow-500 hover:text-white text-2xl md:border-0 border-b-2 text-center ' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn