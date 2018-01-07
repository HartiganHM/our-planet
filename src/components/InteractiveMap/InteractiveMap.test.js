import React from 'react';
import { shallow } from 'enzyme';
import { InteractiveMap, mapStateToProps } from './InteractiveMap';
import mockProps from '../../data/mockProps';
import mockContinentsArray from '../../data/mockContinentsArray';

describe('InteractiveMap tests', () => {
  let renderedMap;

  beforeEach(() => {
    renderedMap = shallow(<InteractiveMap continents={mockProps.continents} />);
  });

  it('Should match the snapshot', () => {
    expect(renderedMap).toMatchSnapshot();
  });

  it('Should desiplay a link for each continent', () => {
    const expectedLength = mockProps.continents.length;
    const expectedElement = 'Link';

    expect(renderedMap.find(expectedElement).length).toEqual(expectedLength);
  });

  describe('mapStateToProps tests', () => {
    it('Should pull continents from store', () => {
      const mockStore = {
        continents: mockContinentsArray
      };
      const result = mapStateToProps(mockStore);

      expect(result.continents).toEqual(mockStore.continents);
    });
  });
});
