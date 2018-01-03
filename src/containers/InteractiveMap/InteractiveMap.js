import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import * as actions from '../../actions';
import PropTypes from 'prop-types';
// import './Header.css';

class InteractiveMap extends Component {
  render() {
    const buttons = this.props.continents.map((continent, index) => {
      const continentLink = '/continents/' + continent.name;

      return (
        <Link key={index} to={continentLink}>
          {continent.name}
        </Link>
      );
    });

    return <div>{buttons}</div>;
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
