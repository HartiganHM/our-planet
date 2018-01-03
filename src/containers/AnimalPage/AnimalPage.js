import React, { Component } from 'react';
import { connect } from 'react-redux';
import matchObjectInStore from '../../helpers/matchObjectInStore/matchObjectInStore';
import { PropTypes } from 'prop-types';
import './AnimalPage.css';

export class AnimalPage extends Component {
  constructor() {
    super();
    this.state = {
      animalData: {}
    };
  }

  componentWillMount() {
    if (this.props.animals.length) {
      const animalData = matchObjectInStore(this.props, 'animal', 'animals');
      this.setState({ animalData });
    }
  }

  componentWillReceiveProps(nextProps) {
    const animalData = matchObjectInStore(nextProps, 'animal', 'animals');
    this.setState({ animalData });
  }

  cleanAnimalData = animalData => {
    const cleanAnimalData = {
      Status: animalData.status,
      Population: animalData.population,
      'Scientific Name': animalData.scientific_name,
      Height: animalData.height,
      Weight: animalData.weight,
      Length: animalData.length,
      Habitat: animalData.habitat,
      'The Facts': animalData.facts,
      "Why I'm Important": animalData.human_benefit
    };

    return cleanAnimalData;
  };

  renderAnimalStats = () => {
    const cleanAnimalData = this.cleanAnimalData(this.state.animalData);
    const animalProperties = Object.keys(cleanAnimalData);
    let longStats = [];
    const basicStats = animalProperties.map(property => {
      if (property === 'The Facts' || property === "Why I'm Important") {
        longStats.push(
          <span className="animal-stat">
            <span className="stat-title">{property}</span>
            <span className="stat-body">{cleanAnimalData[property]}</span>
          </span>
        );
      } else if (cleanAnimalData[property] !== '') {
        return (
          <span className="animal-stat">
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
      <div className="AnimalPage">
        <span className="animal-name">{name}</span>
        <div className="animal-data-container">
          <div className="wrapper">
            {image && (
              <img
                className="animal-image"
                src={require(`../../images/animals/${image}.jpg`)}
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

export const mapStateToProps = store => {
  return {
    animals: store.animals
  };
};

export default connect(mapStateToProps, null)(AnimalPage);

AnimalPage.propTypes = {
  animals: PropTypes.array
};
