import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { copyContent, continentMapData, continentsPaths } from '../../data';

import './InteractiveMap.scss';

const { interactiveMap } = copyContent;

const GRID = 'grid';
const OCEANS = 'oceans';
const CONTINENT = 'continent';

const InteractiveMap = () => {
  const [continent, updateContinent] = useState('');

  const handleMouseHover = continent => {
    updateContinent(continent);
  };

  const createPath = ({ className, displayName, link, name }) =>
    className === GRID ? (
      <g id={className}>
        <g transform={continentsPaths[className].transform}>
          <path className={className} d={continentsPaths[className].path} />
        </g>
      </g>
    ) : (
      <g id={className}>
        <g transform={continentsPaths[className].transform}>
          <Link to={link}>
            <path
              onMouseEnter={() => handleMouseHover(displayName || name)}
              onMouseLeave={() => handleMouseHover('')}
              className={className === OCEANS ? className : CONTINENT}
              d={continentsPaths[className].path}
            />
          </Link>
        </g>
      </g>
    );

  const hoverBox = (
    <div className="hover-box">
      <div className="hover-title">{interactiveMap.hoverTitle}</div>
      <div className="hover-body">
        <div>{interactiveMap.hoverBody}</div>
        <div className="hover-continent">
          {continent || interactiveMap.noHoverPlaceholder}
        </div>
      </div>
    </div>
  );

  return (
    <div className="InteractiveMap">
      {hoverBox}
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 2371 1207">
        {Object.keys(continentMapData).map(continent =>
          createPath(continentMapData[continent])
        )}
      </svg>
    </div>
  );
};

export default InteractiveMap;
