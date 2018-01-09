import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import './Header.css';

export class Header extends Component {
  componentDidMount() {
    this.props.populateData();
  }

  render() {
    const { location } = this.props;
    const aboutActive =
      location === '/about' ? 'nav-button active' : 'nav-button';
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
  }
}

export const mapStateToProps = store => {
  return {
    animals: store.animals
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    populateData: () => dispatch(actions.fetchAllData()),
    resetAnimals: (inputValue, animals) =>
      dispatch(actions.searchAnimals(inputValue, animals))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  animals: PropTypes.array,
  populateData: PropTypes.func,
  resetAnimals: PropTypes.func,
  location: PropTypes.string
};
