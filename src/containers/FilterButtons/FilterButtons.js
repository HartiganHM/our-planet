import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../actions/index';
import PropTypes from 'prop-types';
import './FilterButtons.scss';

export const FilterButtons = ({ filter, switchFilter }) => {
  const displayCopy = ['A - Z', 'Status', 'Habitat'];

  const buttons = ['default', 'status', 'habitat'].map((element, index) => {
    const buttonClass =
      filter === element ? 'filter-button active' : 'filter-button';

    return (
      <span
        key={index}
        className={buttonClass}
        onClick={() => switchFilter(element)}
      >
        {displayCopy[index]}
      </span>
    );
  });

  return <div className="FilterButtons">{buttons}</div>;
};

export const mapStateToProps = store => ({
  filter: store.filter,
});

export const mapDispatchToProps = dispatch => ({
  switchFilter: filterValue => dispatch(changeFilter(filterValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);

FilterButtons.propTypes = {
  filter: PropTypes.string,
  switchFilter: PropTypes.func,
};
