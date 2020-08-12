import React from 'react';
import copyContent from '../../data/copyContent';
import './Intro.scss';

const Intro = () => {
  return (
    <div className="Intro">
      <div className="intro-body">
        <p>{copyContent['intro-1']}</p>
        <p>{copyContent['intro-2']}</p>
      </div>
      <div className="intro-logo" />
    </div>
  );
};

export default Intro;
