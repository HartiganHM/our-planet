import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContinentPage.css';

export class ContinentPage extends Component {
  constructor() {
    super();
    this.state = {
      continentsData: {},
      animals: []
    };
  }

  componentWillMount() {
    if (this.props.continents.length) {
      this.matchContinent(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.matchContinent(nextProps);
  }

  render() {
    return <div className="ContinentPage">I am an ContinentPage</div>;
  }
}

export const mapStateToProps = store => {
  return {
    animals: store.animals,
    continents: store.continents
  };
};

export default connect(mapStateToProps, null)(ContinentPage);
