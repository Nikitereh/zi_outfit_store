import React from 'react';
import { SubHeading } from '../../components';
import  { images } from '../../constants'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading  tittle='Для тех, кто не боится смелых образов' />
      <h1 className='app__header-h1'>ZI OUTFIT</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>Каждый элемент одежды от бренда — это смелость в деталях, комфорт, высокое качество и неповторимый характер. Наши капсулы лимитированы и выделяются нестандартным кроем — всё для того, чтобы каждый твой наряд был незабываемым. Мы относимся с любовью ко всем изделиям и каждому уделяем индивидуальное внимание, чтобы они ежедневно приносили визуальное и тактильное удовольствие.</p>
      <button type='button' className='custom__button'>Explore</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
