import React from 'react';
import { connect } from 'react-redux';
import './Search.css';

export const Search = () => {
  return (
    <div className="Search">
      <input className="search-field" type="text" placeholder="Search" />
    </div>
  );
};

export const mapDispatchToProps = dispath => {
  return {
    
  }
}

export default connect(null, mapDispatchToProps)(Search);
