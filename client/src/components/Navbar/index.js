import React from 'react'
import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/categories"> Categories </Link>
            <Link to="/login"> Login </Link>
            <Link to="/cart"> Cart </Link>
        </div>
    </div>
  )
}

export default Navbar