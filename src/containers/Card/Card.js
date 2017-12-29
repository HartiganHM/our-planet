import React from 'react';
import { PropTypes } from 'prop-types';
import './Card.css';

const Card = props => {
  const { name } = props.animalData;
  const image = name.toLowerCase();

  return (
    <div className='Card'>
      <img
        className='animal-image'
        src={require(`../../images/animals/${image}.jpg`)}
        alt={`${name}-endangered-species`}
      />
      <span className='animal-name'>{name}</span>
    </div>
  );
};

export default Card;

Card.propTypes = {
  animalData: PropTypes.obj
};
