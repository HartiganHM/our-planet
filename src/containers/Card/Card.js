import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './Card.css';

const Card = props => {
  const { name, image } = props.animalData;
  const animalLink = '/animals/' + name;

  return (
    <Link to={animalLink} className='Card'>
      <img
        className='animal-image'
        src={require(`../../images/animals/${image}.jpg`)}
        alt={`${name}-endangered-species`}
      />
      <span className='animal-name'>{name}</span>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  animalData: PropTypes.object
};
