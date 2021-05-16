import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import FilterButtons from '../FilterButtons/FilterButtons';
import * as actions from '../../actions';
import copyContent from '../../data/copyContent';

import './Search.scss';

const { search } = copyContent;

export const Search = ({
  searchAnimals,
  animals,
  setSearchValue,
  searchValue,
}) => {
  const renderHeaderBox = () => (
    <div className="header-box">
      <div className="header-title">{search.title}</div>
      <div className="header-body">{search.description}</div>
    </div>
  );

  const handleChange = (inputValue, animals, property) => {
    searchAnimals(inputValue, animals, property);
    setSearchValue(inputValue);
  };

  return (
    <div className="Search" id="Search">
      {renderHeaderBox}

      <span className="wrapper">
        <input
          className="search-field"
          onChange={event => handleChange(event.target.value, animals, 'name')}
          type="text"
          placeholder={search.placeholder}
          value={searchValue}
        />

        <FilterButtons />
      </span>
    </div>
  );
};

export const mapStateToProps = ({ animals, searchValue }) => ({
  animals,
  searchValue,
});

export const mapDispatchToProps = dispatch => ({
  searchAnimals: (inputValue, animals, property) =>
    dispatch(actions.searchAnimals(inputValue, animals, property)),
  setSearchValue: inputValue => dispatch(actions.changeSearch(inputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
  searchAnimals: PropTypes.func,
  animals: PropTypes.array,
  setSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
};
