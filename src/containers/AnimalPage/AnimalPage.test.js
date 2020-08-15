import React from 'react';
import { shallow } from 'enzyme';
import { AnimalPage, mapStateToProps } from './AnimalPage';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import mockProps from '../../data/mockProps';

describe('AnimalPage tests', () => {
  let renderedAnimalPage;
  let mockRenderAnimalStats;

  beforeEach(() => {
    renderedAnimalPage = shallow(
      <AnimalPage animals={mockProps.animals} match={mockProps.match} />
    );
    mockRenderAnimalStats = renderedAnimalPage.instance().renderAnimalStats();
  });

  it('Should match the snapshot', () => {
    expect(renderedAnimalPage).toMatchSnapshot();
  });

  it('renderAnimalStats should return an object', () => {
    expect(typeof mockRenderAnimalStats).toEqual('object');
  });

  it('renderAnimalStats should have an array for longStats and basicStats', () => {
    expect(typeof mockRenderAnimalStats.basicStats).toEqual('object');
    expect(typeof mockRenderAnimalStats.longStats).toEqual('object');
  });

  it('renderAnimalStats should not render empty properties', () => {
    expect(renderedAnimalPage.state('animalData').population).toBeDefined;

    renderedAnimalPage.state('animalData').population = '';
    const mockRenderAnimalStats = renderedAnimalPage
      .instance()
      .renderAnimalStats();
    const expected = undefined;

    expect(mockRenderAnimalStats.basicStats.population).toEqual(expected);
  });

  describe('mapStateToProps tests', () => {
    it('Should pull animals from the store', () => {
      const mockStore = {
        animals: mockAnimalsArray,
      };
      const result = mapStateToProps(mockStore);

      expect(result.animals).toEqual(mockStore.animals);
    });
  });
});
