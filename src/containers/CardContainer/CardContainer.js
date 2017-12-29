import React, { Component } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CardContainer.css';

export class CardContainer extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    const animalCards = this.props.animals.map((animal, index) => {
      if (animal.display) {
        return <Card key={index} animalData={animal} />;
      }
    });

    return <div className="CardContainer">{animalCards}</div>;

  }
};

export const mapStateToProps = store => {
  return {
    animals: store.animals
  };
};

export default connect(mapStateToProps, null)(CardContainer);

CardContainer.propTypes = {
  animals: PropTypes.array
};
