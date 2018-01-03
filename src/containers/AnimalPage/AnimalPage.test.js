import React from 'react';
import { shallow } from 'enzyme';
import { AnimalPage, mapStateToProps } from './AnimalPage';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import mockProps from '../../data/mockProps';

describe('AnimalPage tests', () => {
  it('Should exist', () => {
    const renderedAnimalPage = shallow(
      <AnimalPage animals={mockProps.animals} match={mockProps.match} />
    );
    expect(renderedAnimalPage).toBeDefined();
  });

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
