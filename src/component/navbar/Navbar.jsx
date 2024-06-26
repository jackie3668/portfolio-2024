import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar fade-in-fwd">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/'>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to='/'>About</Link>
        </li>
        <li className="nav-item">
          <Link to='/'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar