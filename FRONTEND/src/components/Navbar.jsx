import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
 <>
 <div className='flex justify-center items-center p-4 bg-gray-200'>
    <div className='flex gap-4'>
      <Link to="/">
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'>HOME</button>
      </Link>
      <Link to="/code-generator">
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'>Or Code Generator</button>
      </Link>
      <Link to="/login">
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'>Login</button>
      </Link>
    </div>
 </div>
 </>
  )
}

export default Navbar
