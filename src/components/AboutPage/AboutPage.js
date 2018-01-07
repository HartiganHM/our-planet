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
        <div className='section-title'>Purpose</div>
        <div className='section-body'>Purposes and stuff</div>
      </div>

      <div className='why'>
        <div className='why-image'></div>
        <div className='section-title'>Why</div>
        <div className='section-body'>Why the hell not?</div>
      </div>

      <div className='help'>
        <div className='help-image'></div>
        <div className='section-title'>How You Can Help</div>
        <div className='section-body'>Don't be a boner</div>
      </div>
    </div>
  );
};

export default AboutPage;
