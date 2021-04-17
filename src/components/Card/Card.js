import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

import './Card.scss';

const Card = ({ animalData: { name, image } }) => (
  <Link className="card" to={`/animals/${name}`}>
    <img
      className="card__animal-image"
      src={image}
      alt={`${name}-endangered-species`}
    />
    <span className="card__animal-name">{name}</span>
  </Link>
);

export default Card;

Card.propTypes = {
  animalData: shape({
    name: string,
    image: string,
  }),
};
