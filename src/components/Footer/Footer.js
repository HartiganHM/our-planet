import React from 'react';
import copyContent from '../../data/copyContent';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='wrapper'>
        <span className="footer-copy">{copyContent.footer}</span>
        <div className="footer-links">
          <a href="mailto:hartigan.hm@gmail.com" className="link"><div className="icon contact" /><span>Contact</span></a>
          <a href="https://github.com/HartiganHM/our-planet" className="link"><div className="icon github" /><span>FE</span></a>
          <a href="https://github.com/HartiganHM/our-planet-be" className="link"><div className="icon github" /><span>BE</span></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
