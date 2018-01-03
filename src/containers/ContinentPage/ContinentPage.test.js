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

  it('matchContinentAnimals should match animals to a given continent id', () => {
    const expected = mockAnimalsArray;
    const mockContinentId = mockContinentsArray[1].id;
    const result = renderedContinentPage
      .instance()
      .matchContinentAnimals(mockContinentId);

    expect(result).toEqual(expected);
  });

  it('matchContinentAnimals returns an empty array if continent id does not match', () => {
    const expected = [];
    const mockContinentId = mockContinentsArray[0].id;
    const result = renderedContinentPage
      .instance()
      .matchContinentAnimals(mockContinentId);

    expect(result).toEqual(expected);
  });

  describe('mapStateToProps tests', () => {
    it('Should pull animals from the store', () => {
      const mockStore = {
        animals: mockProps.animals
      };
      const result = mapStateToProps(mockStore);

      expect(result.animals).toEqual(mockStore.animals);
    });

    it('Should pull continents from the store', () => {
      const mockStore = {
        continents: mockProps.continents
      };
      const result = mapStateToProps(mockStore);

      expect(result.continents).toEqual(mockStore.continents);
    });
  });
});
