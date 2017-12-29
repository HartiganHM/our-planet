import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Search.css';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleChange() {
    console.log(event)
    const { searchAnimals, animals } = this.props;
    let inputValue = event.target.value;
    this.setState({ searchInput: inputValue })

    searchAnimals(inputValue, animals)
  }

  render() {
    let { searchInput } = this.state;

    return (
      <div className="Search">
        <input
          className="search-field"
          onChange={() => this.handleChange()}
          type="text"
          placeholder="Search"
          value={searchInput}
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

export const mapDispatchToProps = dispath => {
  return {
    searchAnimals: (inputValue, animals) =>
      dispatchEvent(actions.filterAnimals(inputValue, animals))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
