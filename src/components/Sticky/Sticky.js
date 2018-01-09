import React, { Component } from 'react';
import PropTypes from 'prop-types';
import setStickyProperties from '../../helpers/setStickyProperties/setStickyProperties';
import Header from '../../containers/Header/Header';
import './Sticky.css';

class Sticky extends Component {
  componentDidMount() {
    setStickyProperties();
  }

  render() {
    const location = this.props.location.pathname;
    const { className, exit } = this.props;
    let enter;

    if (location === '/about' || location.includes('animals') || location.includes('continents')) {
      enter = '1'
    } else {
      enter = (window.outerHeight + window.innerHeight) / 2;
    }

    return (
      <div
        className={`Sticky ${className}`}
        data-sticky
        data-sticky-enter={enter}
        data-stick-exit={exit}
      >
        <Header location={location}/>
      </div>
    );
  }
}

export default Sticky;

Sticky.propTypes = {
  className: PropTypes.string,
  enter: PropTypes.string,
  exit: PropTypes.string,
  location: PropTypes.object
};
