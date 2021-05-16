import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../../actions';

import './Header.scss';

export const Header = ({ location, populateData }) => {
  useEffect(() => {
    populateData();
  }, []);

  const aboutActive =
    location === '/about/' ? 'nav-button active' : 'nav-button';
  const homeActive = location === '/' ? 'nav-button active' : 'nav-button';

  return (
    <div className="Header">
      <div className="wrapper">
        <span className="headerLogo" />
        <div className="nav-bar">
          <NavLink exact to="/" className={homeActive}>
            Home
          </NavLink>
          <NavLink exact to="/about" className={aboutActive}>
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export const mapStateToProps = ({ animals }) => ({
  animals,
});

export const mapDispatchToProps = dispatch => ({
  populateData: () => dispatch(actions.fetchAllData()),
  resetAnimals: (inputValue, animals) =>
    dispatch(actions.searchAnimals(inputValue, animals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  animals: PropTypes.array,
  populateData: PropTypes.func,
  resetAnimals: PropTypes.func,
  location: PropTypes.string,
};
