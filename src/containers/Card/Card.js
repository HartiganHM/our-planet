import React, { Component } from 'react';
import './Card.css';

const Card = props => {
  const { name } = props.animalData;
  const image = name.toLowerCase();

  return (
    <div className="Card">
      <img
        className="animal-image"
        src={require(`../../images/animals/${image}.jpg`)}
      />
      <span>{name}</span>
    </div>
  );
};

export default Card;
