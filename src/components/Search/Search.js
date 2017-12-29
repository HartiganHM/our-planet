import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Search.css';

export const Search = props => {
  const { searchAnimals, animals } = props;

  return (
    <div className="Search">
      <input
        className="search-field"
        onChange={event => searchAnimals(event.target.value, animals)}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export const mapStateToProps = store => {
  return {
    animals: store.animals
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    searchAnimals: (inputValue, animals) =>
      dispatch(actions.filterAnimals(inputValue, animals))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
