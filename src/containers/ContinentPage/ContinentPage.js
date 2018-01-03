import React, { Component } from 'react';
import { connect } from 'react-redux';
import matchObjectInStore from '../../helpers/matchObjectInStore/matchObjectInStore';
import CardContainer from '../CardContainer/CardContainer';
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
      const continentData = matchObjectInStore(
        this.props,
        'continent',
        'continents'
      );
      const animals = this.matchContinentAnimals(continentData.id);

      this.setState({ continentData, animals });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.continents.length) {
      const continentData = matchObjectInStore(
        nextProps,
        'continent',
        'continents'
      );
      const animals = this.matchContinentAnimals(continentData.id);

      this.setState({ continentData, animals });
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

  matchContinentAnimals = continentId => {
    const animals = this.props.animals.filter(
      animal => animal.continent_id === continentId
    );
    return animals;
  };

  render() {
    return (<div className="ContinentPage"><CardContainer /></div>);
  }
}

export const mapStateToProps = store => {
  return {
    animals: store.animals,
    continents: store.continents
  };
};

export default connect(mapStateToProps, null)(ContinentPage);
