import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import CardContainer from '../CardContainer/CardContainer';
import { LoadingContainer } from '../../components';
import { matchObjectInStore } from '../../helpers';

import './ContinentPage.scss';

export const ContinentPage = props => {
  const [continentData, updateContinentData] = useState([]);
  const [animals, updateAnimals] = useState([]);
  const [isLoading, updateLoading] = useState(true);

  useEffect(() => {
    if (props.continents.length) {
      window.scrollTo(0, 0);
      const continentData = matchObjectInStore(
        props,
        'continent',
        'continents'
      );
      const animals = props.animals.filter(
        animal => animal.continent_id === continentData.id
      );

      updateContinentData(continentData);
      updateAnimals(animals);
      updateLoading(false);
    }
  }, [props]);

  if (isLoading) {
    return <LoadingContainer />;
  }

  const { name, bio, image } = continentData;

  return (
    <div className="ContinentPage buffer">
      <span className="continent-name">{name}</span>
      <div className="continent-data-container">
        <div className="wrapper">
          {image && (
            <img className="continent-image" src={image} alt={`${name}`} />
          )}
          <div className="continent-bio">
            <span className="bio-title">Bio</span>
            <span className="bio-body">{bio}</span>
          </div>
        </div>
        <CardContainer continentAnimals={animals} />
      </div>
    </div>
  );
};

export const mapStateToProps = ({ animals, continents }) => ({
  animals,
  continents,
});

export default connect(mapStateToProps, null)(ContinentPage);

ContinentPage.propTypes = {
  animals: PropTypes.array,
  continents: PropTypes.array,
};
