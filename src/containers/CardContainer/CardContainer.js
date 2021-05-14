import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, LoadingContainer } from '../../components';

import './CardContainer.scss';

export const CardContainer = ({
  animals,
  continents,
  continentAnimals,
  filter,
}) => {
  const continentsArray = continents.map(continent => continent.name);

  const endangeredArray = [
    'Critically Endangered',
    'Endangered',
    'Vulnerable',
    'Near Threatened',
    'Least Concern',
  ];

  const buildDefaultArray = animals =>
    animals
      .filter(animal => animal.display)
      .map((animal, index) => {
        return <Card key={index} animalData={animal} />;
      });

  const buildFilteredArray = (filterValue, array) => {
    const filteredArray = array
      .map((element, index) => {
        return (
          <div key={index} className="filtered-container">
            <span className="filter-header">{element}</span>
            <div className="wrapper">
              {animals
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

  const buildContinentArray = continentAnimals =>
    continentAnimals.map((animal, index) => {
      return <Card key={index} animalData={animal} />;
    });

  let animalCards = [];

  if (continentAnimals) {
    animalCards = buildContinentArray(continentAnimals);
  } else if (filter === 'status') {
    animalCards = buildFilteredArray('status', endangeredArray);
  } else if (filter === 'habitat') {
    animalCards = buildFilteredArray('habitat', continentsArray);
  } else {
    animalCards = buildDefaultArray(animals);
  }

  const contentPlaceholder = (
    <span className="content-placeholder">
      {continentAnimals
        ? 'There are currently no endangered animals in this region'
        : 'That animal is not endangered!'}
    </span>
  );

  const cardContainerClass =
    filter === 'default' ? 'CardContainer' : 'filtered';

  return (
    <div className={continentAnimals ? '' : cardContainerClass}>
      {!animals.length && <LoadingContainer />}
      {!!animals.length && !!animalCards.length && animalCards}
      {!!animals.length && !animalCards.length && contentPlaceholder}
    </div>
  );
};

export const mapStateToProps = store => ({
  animals: store.animals,
  continents: store.continents,
  filter: store.filter,
});

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  animals: PropTypes.array,
  continents: PropTypes.array,
  filter: PropTypes.string,
  continentAnimals: PropTypes.array,
};
