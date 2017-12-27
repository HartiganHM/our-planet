import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
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

export default Header;
