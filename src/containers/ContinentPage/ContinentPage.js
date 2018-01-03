import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContinentPage.css';

export class ContinentPage extends Component {
  constructor() {
    super();
    this.state = {
      continentData: {},
      animals: []
    };
  }

  componentWillMount() {
    if (this.props.continents.length) {
      this.matchContinent(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.continents.length) {
      this.matchContinent(nextProps);
    }
  }

  matchContinent = props => {
    const linkedContinent = props.match.params.continent;
    const continentData = props.continents.find(
      continent => continent.name === linkedContinent
    );
    continentData.image = continentData.name.toLowerCase();

    this.setState({ continentData });
  };

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
