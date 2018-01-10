import React from 'react';
import copyContent from '../../data/copyContent';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='wrapper'>
        <span className="footer-copy">{copyContent.footer}</span>
        <div className="footer-links">
          <a href="https://github.com/HartiganHM/our-planet" className="link"><div className="github-icon" /><span>Front End</span></a>
          <a href="https://github.com/HartiganHM/our-planet-be" className="link"><div className="github-icon" /><span>Back End</span></a>
          <a href="mailto:hartigan.hm@gmail.com" className="link"><div className="contact-icon" /><span>Contact</span></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
