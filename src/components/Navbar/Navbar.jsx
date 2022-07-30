import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {
  const  [toggleMenu, setToggleMenu] = React.useState(false);

  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.zi_logo} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">ZI OUTFIT</a></li>
      <li className='p__opensans'><a href="#menu">Магазин</a></li>
      <li className='p__opensans'><a href="#about">О нас</a></li>
      <li className='p__opensans'><a href="#contacts">Контакты</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'>Войти / Регистрация</a>
      <div />
      <a href="/" className='p__opensans'>Связаться</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu className='app__navbar-hamburger' color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href="#home">ZI OUTFIT</a></li>
            <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href="#menu">Магазин</a></li>
            <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href="#about">О нас</a></li>
            <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href="#contacts">Контакты</a></li>
          </ul>
      </div> 
      )}
    </div>
  </nav>
  );
  }
export default Navbar;
