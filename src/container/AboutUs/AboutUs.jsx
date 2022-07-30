import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.zi_logo} alt="zi-letters" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>О нас</h1>
        <img src={images.scissors} alt="scissors-img" className='scissors__img'/>
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, at. Officia dolor iste fuga impedit, corporis sequi aperiam voluptatum dicta qui doloremque quod quaerat dolorum deserunt distinctio quidem nobis sed!</p>
      </div>
      <div className='app__aboutus-content_middleImage flex__center'>
        <img src={images.middleImage} alt="about_middleImage" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>История</h1>
        <img src={images.scissors} alt="scissors-img" className='scissors__img'/>
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, at. Officia dolor iste fuga impedit, corporis sequi aperiam voluptatum dicta qui doloremque quod quaerat dolorum deserunt distinctio quidem nobis sed!</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
