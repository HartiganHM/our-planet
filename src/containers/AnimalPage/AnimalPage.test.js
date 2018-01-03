import React from 'react';
import { shallow } from 'enzyme';
import { AnimalPage, mapStateToProps } from './AnimalPage';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import mockCleanAnimalData from '../../data/mockCleanAnimalData';
import mockProps from '../../data/mockProps';

describe('AnimalPage tests', () => {
  let renderedAnimalPage;

  beforeEach(() => {
    renderedAnimalPage = shallow(
      <AnimalPage animals={mockProps.animals} match={mockProps.match} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedAnimalPage).toMatchSnapshot();
  });

  it('cleanAnimalData should return an object', () => {});

  it('cleanAnimalData should clean data properties', () => {});

  it('renderAnimalStats should return an object', () => {});

  it('renderAnimalStats should have an array for longStats and basicStats', () => {});

  it('renderAnimalStats should not render empty properties', () => {});

  it('longStats should container "The Facts" and "Why I\'m Important"', () => {});

  describe('mapStateToProps tests', () => {
    it('Should pull animals from the store', () => {
      const mockStore = {
        animals: mockAnimalsArray
      };
      const result = mapStateToProps(mockStore);

      expect(result.animals).toEqual(mockStore.animals);
    });
  });
});
