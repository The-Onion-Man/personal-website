import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/projects'>
        <button>Projects</button>
      </Link>
      <Link to='/resume'>
        <button>Resume</button>
      </Link>
      <Link to='/contact'>
        <button>Contact</button>
      </Link>
    </div>
  );
};

export default NavBar;
