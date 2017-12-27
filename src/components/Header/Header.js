import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions';
import './Header.css';

class Header extends Component {
  componentDidMount() {
    this.props.populateData();
  }

  renderLogo() {
    return <div className="headerLogo" />;
  }

  render() {
    return (
      <div className="Header">
        {this.renderLogo()}
        <div className="nav-bar">
          <NavLink className="nav-button" to="/">
            Home
          </NavLink>
          <NavLink className="nav-button" to="/about">
            About
          </NavLink>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = () => {};

export const mapDispatchToProps = dispatch => {
  return {
    populateData: () => dispatch(actions.fetchAllData())
  };
};

export default connect(null, mapDispatchToProps)(Header);
