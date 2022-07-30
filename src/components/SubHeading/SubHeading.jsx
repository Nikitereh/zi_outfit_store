import React from 'react';
import { images } from '../../constants'

const SubHeading = ({tittle}) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{tittle}</p>
    <img src={images.scissors} width={'40px'} alt="scissors-img" className='scissors__img' />
  </div>
);

export default SubHeading;
