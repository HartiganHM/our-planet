import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import continentsPaths from '../../data/continentsPaths';
import './InteractiveMap.css';

class InteractiveMap extends Component {
  constructor() {
    super();
    this.state = {
      isHovering: false,
      continent: ''
    };
  }

  handleMouseHover = continent => {
    this.setState(this.toggleHoverState, this.setContinent(continent));
  };

  setContinent = continent => {
    this.setState({ continent });
  };

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  createPath = (className, name) => {
    const continentLink = name === 'The Oceans' ? '/continents/Oceans' : '/continents/' + name;

    if (className === 'grid') {
      return (
        <g id={className}>
          <g transform={continentsPaths[className].transform}>
            <path
              className='grid'
              d={continentsPaths[className].path}
            />
          </g>
        </g>
      );

    } else {
      const displayName = name === 'Antarctica Arctic' ? name = 'Antarctica / Arctic' : name;
      return (
        <g id={className}>
          <g transform={continentsPaths[className].transform}>
            <Link to={continentLink}>
              <path
                onMouseEnter={() => this.handleMouseHover(displayName)}
                onMouseLeave={() => this.handleMouseHover('')}
                className={className === 'oceans' ? className : 'continent'}
                d={continentsPaths[className].path}
              />
            </Link>
          </g>
        </g>
      );
    }
  }

  render() {
    const hoverBox = (
      <div className="hover-box">
        <div className='hover-title'>
          What animals are endangered near you?
        </div>
        <div className='hover-body'>
          <div>Use our map to search the globe and view endangered animals from...</div>
          <div className='hover-continent'>{this.state.isHovering ? this.state.continent : ' - '}</div>
        </div>
      </div>
    );

    const oceans = this.createPath('oceans', 'The Oceans');
    const grid = this.createPath('grid');
    const northAmerica = this.createPath('north-america', 'North America');
    const southAmerica = this.createPath('south-america', 'South America');
    const africa = this.createPath('africa', 'Africa');
    const australia = this.createPath('australia', 'Australia');
    const europe = this.createPath('europe', 'Europe');
    const asia = this.createPath('asia', 'Asia');
    const antarcticaArctic = this.createPath('antarctica-arctic', 'Antarctica Arctic');

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
  }
}

export default InteractiveMap;
