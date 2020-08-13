import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './Card.scss';

const Card = (props) => {
  const { name, image } = props.animalData;
  const animalLink = '/our-planet/animals/' + name;
  console.log(image);

  return (
    <Link to={animalLink} className="Card">
      <img
        className="animal-image"
        src={image}
        alt={`${name}-endangered-species`}
      />
      <span className="animal-name">{name}</span>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  animalData: PropTypes.object,
};
