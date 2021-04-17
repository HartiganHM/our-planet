import React, { useEffect } from 'react';
import { copyContent } from '../../data';

import './AboutPage.scss';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    helpDescription,
    helpTitle,
    purposeDescription,
    purposeTitle,
    whyDescription,
    whyTitle,
  } = copyContent.about;

  return (
    <div className="about-page buffer">
      <div className="purpose">
        <div className="parallax purpose-image" />
        <div className="section-title">{purposeTitle}</div>
        <div className="section-body">{purposeDescription}</div>
      </div>

      <div className="why">
        <div className="parallax why-image" />
        <div className="section-title">{whyTitle}</div>
        <div className="section-body">{whyDescription}</div>
      </div>

      <div className="help">
        <div className="parallax help-image" />
        <div className="section-title">{helpTitle}</div>
        <div className="section-body">{helpDescription}</div>
      </div>
    </div>
  );
};

export default AboutPage;
