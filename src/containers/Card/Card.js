import React, { Component } from 'react';
import './Card.css';

const Card = props => {
  const {
    name,
    status,
    population,
    scientific_name,
    height,
    weight,
    length,
    habitat,
    facts,
    human_benefit,
    image
  } = props.animalData;
  return (
    <div className="Card">
      <img src={require(image)} />
      {image}
    </div>
  );
};

export default Card;
