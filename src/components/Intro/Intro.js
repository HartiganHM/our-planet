import React from 'react';
import copyContent from '../../data/copyContent';
import './Intro.css';

const Intro = () => {
  return (
    <div className='Intro'>
      <div className='intro-body'>{copyContent.intro}</div>
    </div>
  )
}

export default Intro