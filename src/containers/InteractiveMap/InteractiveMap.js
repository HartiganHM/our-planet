import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './InteractiveMap.css';

export class InteractiveMap extends Component {
  render() {
    const buttons = this.props.continents.map((continent, index) => {
      const continentLink = '/continents/' + continent.name;
      const continentClass = 'continent-button ' + continent.name;

      return (
        <Link className={continentClass} key={index} to={continentLink}>
          {continent.name}
        </Link>
      );
    });

    return <div className="InteractiveMap">{buttons}</div>;
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
