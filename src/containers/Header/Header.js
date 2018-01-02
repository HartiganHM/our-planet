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

  renderLogo() {
    return (
      <Link
        to="/"
        className="headerLogo"
        onClick={() => this.props.resetAnimals('', this.props.animals)}
      />
    );
  };

  render() {
    return (
      <div className="Header">
        {this.renderLogo()}
        <div className="nav-bar">
          <NavLink
            className="nav-button"
            to="/"
            onClick={() => this.props.resetAnimals('', this.props.animals)}
          >
            Home
          </NavLink>
          <NavLink
            className="nav-button"
            to="/about"
            onClick={() => this.props.resetAnimals('', this.props.animals)}
          >
            About
          </NavLink>
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
  populateData: PropTypes.func
};
