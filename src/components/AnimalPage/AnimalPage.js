import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AnimalPage.css';
import { mapDispatchToProps } from '../../containers/Header/Header';

export class AnimalPage extends Component {
  constructor() {
    super();
    this.state = {
      animalData: {}
    };
  }

  componentWillMount() {
    if (this.props.animals.length) {
      this.matchAnimal(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.matchAnimal(nextProps);
  }

  cleanAnimalData = animalData => {
    const cleanAnimalData = {
      Name: animalData.name,
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

  matchAnimal = props => {
    const linkedAnimal = props.match.params.animal;
    const animalData = props.animals.find(
      animal => animal.name === linkedAnimal
    );
    animalData.image = animalData.name.toLowerCase();

    this.setState({ animalData });
  };

  renderAnimalStats = () => {
    const cleanAnimalData = this.cleanAnimalData(this.state.animalData);
    const animalProperties = Object.keys(cleanAnimalData);
    const animalStatsList = animalProperties.map(property => {
      if (cleanAnimalData[property] !== '') {
        return (
          <span className="animal-stat">
            <span className="stat-title">{property}:</span>
            <span className="stat-body">{cleanAnimalData[property]}</span>
          </span>
        );
      }
    });

    return animalStatsList;
  };

  render() {
    const { name, image } = this.state.animalData;
    const animalStatsList = this.renderAnimalStats();

    return (
      <div className="AnimalPage">
        <span className="animal-name">{name}</span>
        <div className="animal-data-container">
          {image && (
            <img
              className="animal-image"
              src={require(`../../images/animals/${image}.jpg`)}
              alt={`${name}-endangered-species`}
            />
          )}
          <div className="animal-stats">{animalStatsList}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPage);
