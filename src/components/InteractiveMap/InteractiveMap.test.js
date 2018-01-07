import React from 'react';
import { shallow } from 'enzyme';
import InteractiveMap from './InteractiveMap';
import continentsPaths from '../../data/continentsPaths';
import mockContinentsArray from '../../data/mockContinentsArray';

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

  });

  it('Should setState with setContinent', () => {

  });

  it('Should receive an object from toggleHoverState with an opposite boolean', () => {

  });

  it('Should redurn svg path elements with createPath', () => {

  });

  it('Should not render a Link component with createPath when passed grid', () => {

  });
});
