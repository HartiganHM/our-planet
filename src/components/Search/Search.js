import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Search.css';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }

  handleChange(inputValue) {
    console.log(inputValue)
    const { searchAnimals, animals } = this.props;
    this.setState({ inputValue })

    searchAnimals(inputValue, animals)
  }

  render() {
    let { inputValue } = this.state;

    return (
      <div className="Search">
        <input
          className="search-field"
          onChange={event => this.handleChange(event.target.value)}
          type="text"
          placeholder="Search"
          value={inputValue}
        />
      </div>
    );
  }
};

export const mapStateToProps = store => {
  return {
    animals: store.animals
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    searchAnimals: (inputValue, animals) =>
      dispatch(actions.filterAnimals(inputValue, animals))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
