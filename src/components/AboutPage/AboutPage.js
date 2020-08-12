import React from 'react';
import copyContent from '../../data/copyContent';
import './AboutPage.scss';

const AboutPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="AboutPage buffer">
      <div className="purpose">
        <div className="parallax purpose-image" />
        <div className="section-title">Purpose</div>
        <div className="section-body">{copyContent.purpose}</div>
      </div>

      <div className="why">
        <div className="parallax why-image" />
        <div className="section-title">Why</div>
        <div className="section-body">{copyContent.why}</div>
      </div>

      <div className="help">
        <div className="parallax help-image" />
        <div className="section-title">How You Can Help</div>
        <div className="section-body">{copyContent.help}</div>
      </div>
    </div>
  );
};

export default AboutPage;
