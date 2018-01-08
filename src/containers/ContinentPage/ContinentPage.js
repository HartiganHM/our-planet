import React, { Component } from 'react';
import { connect } from 'react-redux';
import matchObjectInStore from '../../helpers/matchObjectInStore/matchObjectInStore';
import CardContainer from '../CardContainer/CardContainer';
import { PropTypes } from 'prop-types';
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
      window.scrollTo(0,0);
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
      window.scrollTo(0,0);
      const continentData = matchObjectInStore(
        nextProps,
        'continent',
        'continents'
      );
      const animals = this.matchContinentAnimals(continentData.id);

      this.setState({ continentData, animals });
    }
  }

  matchContinentAnimals = continentId => {
    const animals = this.props.animals.filter(
      animal => animal.continent_id === continentId
    );
    return animals;
  };

  render() {
    const { name, bio, image } = this.state.continentData;
    return (
      <div className="ContinentPage buffer">
        <span className="continent-name">{name}</span>
        <div className="continent-data-container">
          <div className="wrapper">
            {image && (
              <img
                className="continent-image"
                src={require(`../../images/continents/${image}.jpg`)}
                alt={`${name}`}
              />
            )}
            <div className="continent-bio">
              <span className='bio-title'>Bio</span><span className='bio-body'>{bio}</span>
            </div>
          </div>
          <CardContainer continentAnimals={this.state.animals} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    animals: store.animals,
    continents: store.continents
  };
};

export default connect(mapStateToProps, null)(ContinentPage);

ContinentPage.propTypes = {
  animals: PropTypes.array,
  continents: PropTypes.array
};
