import React from 'react';
import './Navbar.scss';
import HeaderLogo from '../../assets/images/tiktok-title.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="container">
        <div className='logo-header'>
          <Link to='/' >
            <img src={HeaderLogo} alt='Logo' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar