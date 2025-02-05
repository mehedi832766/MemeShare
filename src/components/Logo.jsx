import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img className='object-contain h-12 w-12' src="src/assets/logo.svg" alt="" />
       </div>
  )
}

export default Logo