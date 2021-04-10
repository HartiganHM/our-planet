import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import continentsPaths from '../../data/continentsPaths';
import './InteractiveMap.scss';

const InteractiveMap = () => {
  const [isHovering, updateHovering] = useState(false);
  const [continent, updateContinent] = useState('');

  const handleMouseHover = continent => {
    updateHovering(!isHovering);
    updateContinent(continent);
  };

  const createPath = (className, name) => {
    const continentLink =
      name === 'The Oceans'
        ? '/our-planet/continents/Oceans'
        : '/our-planet/continents/' + name;

    if (className === 'grid') {
      return (
        <g id={className}>
          <g transform={continentsPaths[className].transform}>
            <path className="grid" d={continentsPaths[className].path} />
          </g>
        </g>
      );
    } else {
      const displayName =
        name === 'Antarctica Arctic' ? (name = 'Antarctica / Arctic') : name;
      return (
        <g id={className}>
          <g transform={continentsPaths[className].transform}>
            <Link to={continentLink}>
              <path
                onMouseEnter={() => handleMouseHover(displayName)}
                onMouseLeave={() => handleMouseHover('')}
                className={className === 'oceans' ? className : 'continent'}
                d={continentsPaths[className].path}
              />
            </Link>
          </g>
        </g>
      );
    }
  };

  const hoverBox = (
    <div className="hover-box">
      <div className="hover-title">What animals are endangered near you?</div>
      <div className="hover-body">
        <div>
          Use our map to search the globe and view endangered animals from...
        </div>
        <div className="hover-continent">{isHovering ? continent : ' - '}</div>
      </div>
    </div>
  );

  const oceans = createPath('oceans', 'The Oceans');
  const grid = createPath('grid');
  const northAmerica = createPath('north-america', 'North America');
  const southAmerica = createPath('south-america', 'South America');
  const africa = createPath('africa', 'Africa');
  const australia = createPath('australia', 'Australia');
  const europe = createPath('europe', 'Europe');
  const asia = createPath('asia', 'Asia');
  const antarcticaArctic = createPath('antarctica-arctic', 'Antarctica Arctic');

  return (
    <div className="InteractiveMap">
      {hoverBox}
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 2371 1207">
        {oceans}
        {grid}
        {northAmerica}
        {southAmerica}
        {africa}
        {australia}
        {europe}
        {asia}
        {antarcticaArctic}
      </svg>
    </div>
  );
};

export default InteractiveMap;
