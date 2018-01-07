import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='AboutPage'>
      <div className='our-planet'>
        <div className='our-planet-image'></div>
        <div className='our-planet-body'></div>
      </div>

      <div className='purpose'>
        <div className='purpose-image'></div>
        <div className='purpose-body'></div>
      </div>

      <div className='why'>
        <div className='why-image'></div>
        <div className='why-body'></div>
      </div>

      <div className='help'>
        <div className='help-image'></div>
        <div className='help-body'></div>
      </div>
    </div>
  );
};

export default AboutPage;
