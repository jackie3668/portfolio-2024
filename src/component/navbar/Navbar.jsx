import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menu from '../../asset/ui/hamburger.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fade-in-fwd">
      <div className="menu-icon" onClick={toggleMenu}>
        <button 
        className={`menu ${isOpen ? 'opened' : ''}`} 
        onClick={toggleMenu} 
        aria-expanded={isOpen} 
        aria-label="Main Menu">
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </div>
      <ul className={`nav-menu ${isOpen === true ? 'active' : isOpen === false ? 'slide-out-right' : ''}`}>
        <li className="nav-item">
          <Link to='/' onClick={toggleMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/projects' onClick={toggleMenu}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' onClick={toggleMenu}>About</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
