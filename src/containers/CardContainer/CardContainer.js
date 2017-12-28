import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './CardContainer.css';

export class CardContainer extends Component {
  render() {
    return <div className="CardContainer">I am an CardContainer</div>;
  }
}

export const mapStateToProps = store => {
  return {
    animals: store.animals
  };
};

export default connect(mapStateToProps, null)(CardContainer);
