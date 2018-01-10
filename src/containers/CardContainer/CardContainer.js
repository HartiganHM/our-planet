import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CardContainer.css';

export const CardContainer = props => {
  const continentsArray = props.continents.map(continent => continent.name);

  const endangeredArray = [
    'Least Concern',
    'Near Threatened',
    'Vulnerable',
    'Endangered',
    'Critically Endangered'
  ];

  const buildDefaultArray = animals => {
    return animals.map((animal, index) => {
      return animal.display ? (
        <Card key={index} animalData={animal} />
      ) : (
        undefined
      );
    });
  };

  const buildFilteredArray = (filterValue, filteredArray) => {
    return filteredArray.map((element, index) => {
      return (
        <div className='filtered-container'>
          <span id={index} className="filter-header">
            {element}
          </span>
          <div className="wrapper">
            {props.animals.map((animal, index) => {
              if (animal[filterValue] === element) {
                return <Card key={index} animalData={animal} />;
              }
            })}
          </div>
        </div>
      );
    });
  };

  const buildContinentArray = continentAnimals => {
    return continentAnimals.map((animal, index) => {
      return <Card key={index} animalData={animal} />;
    });
  };

  let animalCards = [];

  if (props.filter === 'status') {
    animalCards = buildFilteredArray('status', endangeredArray);
  } else if (props.filter === 'habitat') {
    animalCards = buildFilteredArray('habitat', continentsArray);
  } else if (props.continentAnimals) {
    animalCards = buildContinentArray(props.continentAnimals);
  } else {
    animalCards = buildDefaultArray(props.animals);
  }

  const contentPlaceholder = (
    <span className="content-placeholder">
      {props.continentAnimals
        ? 'There are currently no endangered animals in this region'
        : 'Loading'}
    </span>
  );

  return (
    <div className={props.filter === 'default' ? 'CardContainer' : 'filtered'}>
      {animalCards.length ? animalCards : contentPlaceholder}
    </div>
  );
};

export const mapStateToProps = store => {
  return {
    animals: store.animals,
    continents: store.continents,
    filter: store.filter
  };
};

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  animals: PropTypes.array,
  continents: PropTypes.array,
  continentAnimals: PropTypes.array
};
