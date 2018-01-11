import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FilterButtons.css';
import { changeFilter } from '../../actions/index';

export class FilterButtons extends Component {
  render() {
    const displayCopy = ['A-Z', 'Endangered Level', 'Region'];

    const buttons = ['default', 'status', 'habitat'].map((element, index) => {
      const buttonClass = this.props.filter === element ? 'filter-button active' : 'filter-button';
      return (
        <span className={buttonClass} onClick={() => this.props.switchFilter(element)}>{displayCopy[index]}</span>
      )
    })

    return (
      <div className="FilterButtons">
        {buttons}
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    filter: store.filter
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    switchFilter: filterValue => dispatch(changeFilter(filterValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);
