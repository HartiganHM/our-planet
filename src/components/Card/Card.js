import React from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

import './Card.scss';

const Card = (props) => {
  const { name, image } = props.animalData;

  return (
    <Link className="card" to={`/our-planet/animals/${name}`}>
      <img
        className="card__animal-image"
        src={image}
        alt={`${name}-endangered-species`}
      />
      <span className="card__animal-name">{name}</span>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  animalData: object,
};
