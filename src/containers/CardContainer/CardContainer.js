import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CardContainer.css';

export const CardContainer = props => {
  const continentsArray = props.continents.map(continent => continent.name);

  const endangeredArray = [
    'Critically Endangered',
    'Endangered',
    'Vulnerable',
    'Near Threatened',
    'Least Concern'
  ];

  const buildDefaultArray = animals => {
    return animals.map((animal, index) => {
      if (animal.display) {
        return <Card key={index} animalData={animal} />;
      }
    });
  };

  const buildFilteredArray = (filterValue, array) => {
    const filteredArray = array
      .map((element, index) => {
        return (
          <div key={index} className="filtered-container">
            <span className="filter-header">
              {element}
            </span>
            <div className="wrapper">
              {props.animals
                .filter(animal => animal[filterValue] === element)
                .filter(animal => animal.display)
                .map((animal, index) => {
                  if (animal[filterValue] === element) {
                    return <Card key={index} animalData={animal} />;
                  }
                })}
            </div>
          </div>
        );
      })
      .filter(element => element.props.children[1].props.children.length);

    return filteredArray;
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
