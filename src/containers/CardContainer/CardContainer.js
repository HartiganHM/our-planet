import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CardContainer.css';

export const CardContainer = props => {
  const contentPlaceholder = (
    <span className="content-placeholder">
      {props.continentAnimals
        ? 'There are currently no endangered animals in this region'
        : 'Loading'
      }
    </span>
  );

  const endangeredArray = ['Least Concern', 'Near Threatened', 'Vulnerable', 'Endangered', 'Critically Endangered'];

  const continentsArray = props.continents.map(continent => continent.name);

  const animalsArray = props.continentAnimals
    ? props.continentAnimals
    : props.animals;

  const animalCards = animalsArray.map((animal, index) => {
    if (props.continentAnimals) {
      return (<Card key={index} animalData={animal} />);

    } else {
      return animal.display
        ? (<Card key={index} animalData={animal} />)
        : (undefined);
    }
  });

  return (
    <div className="CardContainer">
      {animalCards.length ? animalCards : contentPlaceholder}
      {props.animals._filter === 'endangered' && endangeredArray}
    </div>
  );
};

export const mapStateToProps = store => {
  return {
    animals: store.animals,
    continents: store.continents
  };
};

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  animals: PropTypes.array,
  continents: PropTypes.array,
  continentAnimals: PropTypes.array
};
