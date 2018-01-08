import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { PropTypes } from 'prop-types';
import './Search.css';

export const Search = props => {
  const { searchAnimals, animals } = props;
  const headerBox = (
    <div className="header-box">
      <div className="header-title">Animals of all shapes and sizes</div>
      <div className="header-body">
        Is your favorite animal endangered? Search below and click on an animal
        to learn more about them!
      </div>
    </div>
  );

  return (
    <div className="Search">
      {headerBox}
      <input
        className="search-field"
        onChange={event => searchAnimals(event.target.value, animals, 'name')}
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
    searchAnimals: (inputValue, animals, property) =>
      dispatch(actions.searchAnimals(inputValue, animals, property))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
  searchAnimals: PropTypes.func,
  animals: PropTypes.array
};
