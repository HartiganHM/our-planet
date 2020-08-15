import React from 'react';
import { connect } from 'react-redux';
import FilterButtons from '../FilterButtons/FilterButtons';
import * as actions from '../../actions';
import { PropTypes } from 'prop-types';
import './Search.scss';

export const Search = props => {
  const { searchAnimals, animals, setSearchValue, searchValue } = props;
  const headerBox = (
    <div className="header-box">
      <div className="header-title">
        Search for animals of all shapes and sizes
      </div>
      <div className="header-body">
        Is your favorite animal endangered? Search below and click on an animal
        to learn more about them!
      </div>
    </div>
  );

  const handleChange = (inputValue, animals, property) => {
    searchAnimals(inputValue, animals, property);
    setSearchValue(inputValue);
  };

  return (
    <div className="Search" id="Search">
      {headerBox}
      <span className="wrapper">
        <input
          className="search-field"
          onChange={event => handleChange(event.target.value, animals, 'name')}
          type="text"
          placeholder="Search"
          value={searchValue}
        />
        <FilterButtons />
      </span>
    </div>
  );
};

export const mapStateToProps = store => {
  return {
    animals: store.animals,
    searchValue: store.searchValue,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    searchAnimals: (inputValue, animals, property) =>
      dispatch(actions.searchAnimals(inputValue, animals, property)),
    setSearchValue: inputValue => dispatch(actions.changeSearch(inputValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
  searchAnimals: PropTypes.func,
  animals: PropTypes.array,
  setSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
};
