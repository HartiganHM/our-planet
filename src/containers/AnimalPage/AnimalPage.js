import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { LoadingContainer } from '../../components';
import { animalDataCleaner, matchObjectInStore } from '../../helpers';

import './AnimalPage.scss';

export const AnimalPage = props => {
  const [animalData, updateAnimalData] = useState(undefined);
  const [isLoading, updateLoading] = useState(true);

  useEffect(() => {
    if (props.animals.length) {
      window.scrollTo(0, 0);
      const animalData = matchObjectInStore(props, 'animal', 'animals');
      updateAnimalData(animalData);
      updateLoading(false);
    }
  }, [props]);

  const renderAnimalStats = () => {
    const cleanAnimalData = animalDataCleaner(animalData);
    const animalProperties = Object.keys(cleanAnimalData).filter(
      stat => cleanAnimalData[stat]
    );

    const { basicStats, longStats } = animalProperties.reduce(
      (accumulator, property, index) => {
        if (property === 'The Facts' || property === "Why I'm Important") {
          return {
            ...accumulator,
            longStats: [
              ...accumulator.longStats,
              <span key={index} className="animal-stat">
                <span className="stat-title">{property}</span>
                <span className="stat-body">{cleanAnimalData[property]}</span>
              </span>,
            ],
          };
        }

        return {
          ...accumulator,
          basicStats: [
            ...accumulator.basicStats,
            <span key={index} className="animal-stat">
              <span className="stat-title">{property}:</span>
              <span className="stat-body">{cleanAnimalData[property]}</span>
            </span>,
          ],
        };
      },
      { basicStats: [], longStats: [] }
    );

    return { basicStats, longStats };
  };

  if (isLoading) {
    return <LoadingContainer />;
  }

  const { name, image } = animalData;
  const { basicStats, longStats } = renderAnimalStats();
  console.log(animalData);

  return (
    <div className="AnimalPage buffer">
      <span className="animal-name">{name}</span>
      <div className="animal-data-container">
        <div className="wrapper">
          <img
            className="animal-image"
            src={image}
            alt={`${name}-endangered-species`}
          />
          <div className="animal-basic-stats">{basicStats}</div>
        </div>
        <div className="animal-long-stats">{longStats}</div>
      </div>
    </div>
  );
};

export const mapStateToProps = store => ({
  animals: store.animals,
});

export default connect(mapStateToProps, null)(AnimalPage);

AnimalPage.propTypes = {
  animals: PropTypes.array,
};
