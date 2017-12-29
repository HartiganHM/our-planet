import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Search.css';

export const Search = props => {
  const { searchAnimals, animals } = props;
  console.log(animals)

  return (
    <div className="Search">
      <input
        className="search-field"
        onChange={event => searchAnimals(event.target.value, animals)}
        type="text"
        placeholder="Search"
        value=''
      />
    </div>
  );
};

export const mapStateToProps = store => {
  return {
    animals: store.animals
  }
};

export const mapDispatchToProps = dispath => {
  return {
    searchAnimals: (inputValue, animals) =>
      dispatchEvent(actions.filterAnimals(inputValue, animals))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
