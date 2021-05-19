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

  it('Should display a link for each continent', () => {
    const expectedElement = 'Link';
    const expectedLength = Object.keys(continentsPaths).length - 1;

    expect(renderedMap.find(expectedElement).length).toEqual(expectedLength);
  });
});
