import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/Header/Header';
import { setStickyProperties } from '../../helpers';

import './Sticky.scss';

const Sticky = ({ className, location: { pathname } }) => {
  useEffect(() => {
    setStickyProperties();
  }, []);

  const calculateEnterHeight = () => {
    if (
      pathname === '/about' ||
      pathname.includes('animals') ||
      pathname.includes('continents')
    ) {
      return 1;
    }

    return (window.outerHeight + window.innerHeight) / 2;
  };

  const enter = calculateEnterHeight();

  return (
    <div
      className={`Sticky ${className}`}
      data-sticky
      data-sticky-enter={enter}
    >
      <Header location={pathname} />
    </div>
  );
};

export default Sticky;

Sticky.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object,
};
