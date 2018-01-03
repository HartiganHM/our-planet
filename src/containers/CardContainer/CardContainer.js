import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CardContainer.css';

export const CardContainer = props => {
  const noEndangeredAnimals = (
    <span className="no-endangered-animals">
      There are currently no endangered animals in this region
    </span>
  );
  const animalsArray = props.continentAnimals
    ? props.continentAnimals
    : props.animals;
  const animalCards = animalsArray.map((animal, index) => {
    return animal.display
    ? (<Card key={index} animalData={animal} />)
    : (undefined);
  });

  return (
    <div className="CardContainer">
      {animalCards.length ? animalCards : noEndangeredAnimals}
    </div>
  );
};

export const mapStateToProps = store => {
  return {
    animals: store.animals
  };
};

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  animals: PropTypes.array,
  continentAnimals: PropTypes.array
};
