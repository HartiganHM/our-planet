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
    this.matchAnimal(nextProps)
  }

  matchAnimal = (props) => {
    const linkedAnimal = props.match.params.animal;
    const animalData = props.animals.find(
      animal => animal.name === linkedAnimal
    );
    animalData.image = animalData.name.toLowerCase();

    this.setState({ animalData });
  };

  render() {
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
