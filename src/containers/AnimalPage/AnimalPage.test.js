import React from 'react';
import { shallow } from 'enzyme';
import { AnimalPage, mapStateToProps } from './AnimalPage';
import mockAnimalsArray from '../../data/mockAnimalsArray';
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
