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
    const { className, enter, exit } = this.props;
    const alternateEnter = location === '/about' ? '1' : enter;

    return (
      <div
        className={`Sticky ${className}`}
        data-sticky
        data-sticky-enter={alternateEnter}
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
