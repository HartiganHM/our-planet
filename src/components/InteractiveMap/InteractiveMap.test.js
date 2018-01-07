import React from 'react';
import { shallow } from 'enzyme';
import InteractiveMap from './InteractiveMap';
import continentsPaths from '../../data/continentsPaths';

describe('InteractiveMap tests', () => {
  let renderedMap;

  beforeEach(() => {
    renderedMap = shallow(<InteractiveMap />);
  });

  it('Should match the snapshot', () => {
    expect(renderedMap).toMatchSnapshot();
  });

  it('Should desiplay a link for each continent', () => {
    const expectedElement = 'Link';
    const expectedLength = Object.keys(continentsPaths).length - 1;

    expect(renderedMap.find(expectedElement).length).toEqual(expectedLength);
  });

  it('Should setState with handleMouseHover', () => {
    const expectedState = {
      isHovering: true,
      continent: 'Asia'
    };

    renderedMap.instance().handleMouseHover('Asia');
    expect(renderedMap.state()).toEqual(expectedState);
  });

  it('Should setState with setContinent', () => {
    const expectedContinent = 'Europe';

    renderedMap.instance().setContinent('Europe');
    expect(renderedMap.state('continent')).toEqual(expectedContinent);
  });

  it('Should receive an object from toggleHoverState with an opposite boolean', () => {
    const expectedReturn = { isHovering: true };
    const mockReturnObject = renderedMap
      .instance()
      .toggleHoverState(renderedMap.state());

    expect(mockReturnObject).toEqual(expectedReturn);
  });

  it('Should setState with the return object from toggleHoverState', () => {
    const expectedState = {
      isHovering: true,
      continent: ''
    };

    expect(renderedMap.state('isHovering')).toEqual(false);
    renderedMap.instance().handleMouseHover('');

    expect(renderedMap.state()).toEqual(expectedState);
  });

  it('Should return svg path elements with createPath', () => {
    const mockPath = renderedMap
      .instance()
      .createPath('north-america', 'North America');
    const expectedTransform = continentsPaths['north-america'].transform;
    const expectedPath = continentsPaths['north-america'].path;

    expect(mockPath.props.children.props.transform).toEqual(expectedTransform);
    expect(
      mockPath.props.children.props.children.props.children.props.d
    ).toEqual(expectedPath);
  });

  it('Should return different render when createPath is passed grid', () => {
    const mockPath = renderedMap.instance().createPath('grid');
    const renderedGrid = renderedMap.find('.grid').prop('d');
    const expectedPath = mockPath.props.children.props.children.props.d;

    expect(renderedGrid).toEqual(expectedPath);
  });
});
