import React from 'react'
import { Login as LoginComponent } from '../components'

function Login() {
  return (
    <div className='flex items-center border-4 border-red-600 py-8'>
      <LoginComponent />
    </div>
  );
}

export default Login