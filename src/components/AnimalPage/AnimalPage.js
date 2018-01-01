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

  componentWillReceiveProps(nextProps) {
    const linkedAnimal = this.props.match.params.animal;
    const animalData = nextProps.animals.find(
      animal => animal.name === linkedAnimal
    );
    animalData.image = animalData.name.toLowerCase();

    this.setState({ animalData });
  }

  render() {
    const animalData = this.state.animalData.name ? console.log('full') : console.log('empty');
    const {
      name,
      status,
      population,
      scientific_name,
      height,
      weight,
      length,
      habitat,
      facts,
      human_benefit,
      image
    } = this.state.animalData;


    return (
      <div className="AnimalPage">
        <span>{name}</span>
        {image && (
          <img
            className="animal-image"
            src={require(`../../images/animals/${image}.jpg`)}
            alt={`${name}-endangered-species`}
          />
        )}
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
