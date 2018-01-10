import React from 'react';
import copyContent from '../../data/copyContent';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='wrapper'>
        <span>{copyContent.footer}</span>
      </div>
    </div>
  )
}

export default Footer
