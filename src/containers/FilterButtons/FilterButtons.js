import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../actions/index';
import PropTypes from 'prop-types';
import './FilterButtons.scss';

export class FilterButtons extends Component {
  render() {
    const displayCopy = ['A - Z', 'Status', 'Habitat'];

    const buttons = ['default', 'status', 'habitat'].map((element, index) => {
      const buttonClass =
        this.props.filter === element
          ? 'filter-button active'
          : 'filter-button';
      return (
        <span
          key={index}
          className={buttonClass}
          onClick={() => this.props.switchFilter(element)}
        >
          {displayCopy[index]}
        </span>
      );
    });

    return <div className="FilterButtons">{buttons}</div>;
  }
}

export const mapStateToProps = store => {
  return {
    filter: store.filter,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    switchFilter: filterValue => dispatch(changeFilter(filterValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);

FilterButtons.propTypes = {
  filter: PropTypes.string,
  switchFilter: PropTypes.func,
};
