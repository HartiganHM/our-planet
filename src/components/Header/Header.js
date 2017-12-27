import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions';
import './Header.css';

class Header extends Component {
  componentDidMount() {
    this.props.populateData();
  }

  render() {
    return (
      <div className="Header">
        <NavLink to="/">
          <img src="../images/Our-Planet-Text.png" alt="our-planet-wordmark" />
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    );
  }
}

export const mapStateToProps =() => {

}

export const mapDispatchToProps = (dispatch) => {
  return {
    populateData: () => dispatch(actions.fetchAllData)
  }
}

export default connect(null, mapDispatchToProps)(Header);
