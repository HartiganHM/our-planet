import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import matchObjectInStore from '../../helpers/matchObjectInStore/matchObjectInStore';
import animalDataCleaner from '../../helpers/animalDataCleaner/animalDataCleaner';
import './AnimalPage.scss';

export class AnimalPage extends Component {
  constructor() {
    super();
    this.state = {
      animalData: {},
    };
  }

  componentWillMount() {
    if (this.props.animals.length) {
      window.scrollTo(0, 0);
      const animalData = matchObjectInStore(this.props, 'animal', 'animals');
      this.setState({ animalData });
    }
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
    const animalData = matchObjectInStore(nextProps, 'animal', 'animals');
    this.setState({ animalData });
  }

  renderAnimalStats = () => {
    const cleanAnimalData = animalDataCleaner(this.state.animalData);
    const animalProperties = Object.keys(cleanAnimalData);
    let longStats = [];
    let basicStats = [];
    animalProperties.forEach((property, index) => {
      if (property === 'The Facts' || property === "Why I'm Important") {
        longStats.push(
          <span key={index} className="animal-stat">
            <span className="stat-title">{property}</span>
            <span className="stat-body">{cleanAnimalData[property]}</span>
          </span>
        );
      } else if (cleanAnimalData[property] !== '') {
        basicStats.push(
          <span key={index} className="animal-stat">
            <span className="stat-title">{property}:</span>
            <span className="stat-body">{cleanAnimalData[property]}</span>
          </span>
        );
      }
    });

    return { basicStats, longStats };
  };

  render() {
    const { name, image } = this.state.animalData;
    const { basicStats, longStats } = this.renderAnimalStats();

    return (
      <div className="AnimalPage buffer">
        <span className="animal-name">{name}</span>
        <div className="animal-data-container">
          <div className="wrapper">
            {image && (
              <img
                className="animal-image"
                src={image}
                alt={`${name}-endangered-species`}
              />
            )}
            <div className="animal-basic-stats">{basicStats}</div>
          </div>
          <div className="animal-long-stats">{longStats}</div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (store) => {
  return {
    animals: store.animals,
  };
};

export default connect(mapStateToProps, null)(AnimalPage);

AnimalPage.propTypes = {
  animals: PropTypes.array,
};
