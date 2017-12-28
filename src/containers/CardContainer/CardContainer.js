import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './CardContainer.css';

export class CardContainer extends Component {
  render() {
    const animalCards = this.props.animals.map(animal => (
      <Card animalData={animal} />
    ));

    return <div className="CardContainer">{animalCards}</div>;
  }
}

export const mapStateToProps = store => {
  return {
    animals: store.animals
  };
};

export default connect(mapStateToProps, null)(CardContainer);
