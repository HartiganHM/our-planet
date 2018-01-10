import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FilterButtons.css';
import { changeFilter } from '../../actions/index';

export class FilterButtons extends Component {
  render() {
    console.log(this.props.filter)
    return (
      <div className="FilterButtons">
        <span className="filter-button" onClick={() => this.props.switchFilter('default')}>From A - Z</span>
        <span className="filter-button" onClick={() => this.props.switchFilter('status')}>By Endangered Level</span>
        <span className="filter-button" onClick={() => this.props.switchFilter('habitat')}>By Region</span>
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
