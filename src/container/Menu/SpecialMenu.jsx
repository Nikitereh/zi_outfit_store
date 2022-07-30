import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-tittle'>
      <SubHeading tittle='Каталог' />
      <h1 className='headText__cormorant'>BestSellers</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_left'>
      <SubHeading />
      <div className='app__specialMenu-menu_items'>
        {data.clothesLeftSide.map((clothe, index) => (
          <MenuItem key={clothe.title + index} title={clothe.title} price={clothe.price} tags={clothe.tags} />
        ))}
      </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu img" />
      </div>
      <div className='app__specialMenu-menu_right'>
      <SubHeading />
      <div className='app__specialMenu-menu_items'>
        {data.clothesRightSide.map((clothe, index) => (
          <MenuItem key={clothe.title + index} title={clothe.title} price={clothe.price} tags={clothe.tags} />
        ))}
      </div>
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>В магазин</button>
    </div>
  </div>
);

export default SpecialMenu;
