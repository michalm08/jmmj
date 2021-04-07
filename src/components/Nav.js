import React from 'react';
import logo from '../img/logo.svg';

const Nav = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='buttons'>
        <ul>
          <li>What we do?</li>
          <li>Our projects</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>
      </div>
      <div className='auth'>
        <ul>
          <li className='btn'>Log In</li>
          <li className='btnDark btn'>Register</li>
          <li>
            <i className='fas fa-bars'></i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
