import React from 'react';
import { connect } from 'react-redux';
import './AnimalPage.css';
import { mapDispatchToProps } from '../../containers/Header/Header';

export const AnimalPage = (props) => {
  const linkedAnimal = props.match.params.animal;
  const match = props.animals.find(animal => animal.name === linkedAnimal);
  const { name, status, population, scientific_name, height, weight, length, habitat, facts, human_benefit } = match;
  const image = name.toLowerCase();

  console.log(match)
  return (
    <div className="AnimalPage">
      <img src={require(`../../images/animals/${image}.jpg`)} />
    </div>);
};

export const mapStateToProps = store => {
  return {
    animals: store.animals
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPage);
