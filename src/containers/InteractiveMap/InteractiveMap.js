import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import * as actions from '../../actions';
import PropTypes from 'prop-types';
import imageMap from '../../data/imageMap';
import ImageMap from 'image-map';
import './InteractiveMap.css';

export class InteractiveMap extends Component {
  constructor() {
    super();
    this.state = {
      src: '../../images/interactive-map/world/OP-Interactive-Map.png'
    };
  }

  handleMouse = () => {
    console.log('in');
  };

  handleRedirect = continentLink => {
    return continentLink;
  };

  render() {
    const buttons = this.props.continents.map((continent, index) => {
      const continentLink = '/continents/' + continent.name;
      const continentKabob = continent.image.split(' ').join('-');
      const continentClass = 'continent-button ' + continentKabob;
      let continentMap = imageMap[continentKabob];

      return (
        <area
          className={continentKabob}
          shape="poly"
          coords={continentMap}
          onClick={() => this.handleRedirect(continentLink)}
          onMouseOver={() => this.handleMouse()}
          onMouseOut={() => this.handleMouse()}
          alt={continentKabob}
        />
      );
    });

    ImageMap('img[usemap]');

    return (
      <div className="InteractiveMap">
        <img
          id="world-image"
          alt="our-planet-world-map"
          src={require('../../images/interactive-map/world/OP-Interactive-Map.png')}
          className="world-image"
          useMap="#image-map"
        />
        <map id="image-map" name="image-map">
          {buttons}
        </map>
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    continents: store.continents
  };
};

export default connect(mapStateToProps, null)(InteractiveMap);

InteractiveMap.propTypes = {
  continents: PropTypes.array
};
