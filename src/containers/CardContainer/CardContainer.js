import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CardContainer.css';

export const CardContainer = props => {
  const animalCards = props.animals.map((animal, index) => {
    return animal.display
      ? (<Card key={index} animalData={animal} />)
      : (undefined);
  });

  return <div className="CardContainer">{animalCards}</div>;
};

export const mapStateToProps = store => {
  return {
    animals: store.animals
  };
};

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  animals: PropTypes.array
};
