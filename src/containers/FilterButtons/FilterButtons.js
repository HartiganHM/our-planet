import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FilterButtons.css';

class FilterButtons extends Component {
  render() {
    return (
      <div className="FilterButtons">
        <span className="filter-button">From A - Z</span>
        <span className="filter-button">By Endangered Level</span>
        <span className="filter-button">By Region</span>
      </div>
    );
  }
}

export default FilterButtons;
