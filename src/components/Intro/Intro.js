import React from 'react';
import { copyContent } from '../../data';

import './Intro.scss';

const { intro } = copyContent;

const Intro = () => (
  <div className="Intro">
    <div className="intro-body">
      <p>{intro.partOne}</p>
      <p>{intro.partTwo}</p>
    </div>
    <div className="intro-logo" />
  </div>
);

export default Intro;
