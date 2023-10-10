import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return ( 
    <div className='Navbar_div'>
      <Link to="/">Home</Link>
      <Link to='/addDate'>Add Data</Link>
      <Link to="/login">Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default Navbar