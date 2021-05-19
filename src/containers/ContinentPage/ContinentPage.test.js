import React from 'react';
import { shallow } from 'enzyme';
import { ContinentPage, mapStateToProps } from './ContinentPage';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import mockContinentsArray from '../../data/mockContinentsArray';
import mockProps from '../../data/mockProps';

describe('ContinentPage tests', () => {
  let renderedContinentPage;

  beforeEach(() => {
    renderedContinentPage = shallow(
      <ContinentPage
        animals={mockProps.animals}
        continents={mockProps.continents}
        match={mockProps.match}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedContinentPage).toMatchSnapshot();
  });

  describe('mapStateToProps tests', () => {
    it('Should pull animals from the store', () => {
      const mockStore = {
        animals: mockProps.animals,
      };
      const result = mapStateToProps(mockStore);

      expect(result.animals).toEqual(mockStore.animals);
    });

    it('Should pull continents from the store', () => {
      const mockStore = {
        continents: mockProps.continents,
      };
      const result = mapStateToProps(mockStore);

      expect(result.continents).toEqual(mockStore.continents);
    });
  });
});
