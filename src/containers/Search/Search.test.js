import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapStateToProps, mapDispatchToProps } from './Search';
import mockAnimalsArray from '../../data/mockAnimalsArray';

describe('Search tests', () => {
  let mockAnimals;
  let mockSearchAnimals;
  let renderedSearch;

  beforeEach(() => {
    mockAnimals = mockAnimalsArray;
    mockSearchAnimals = jest.fn();
    renderedSearch = shallow(
      <Search searchAnimals={mockSearchAnimals} animals={mockAnimals} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedSearch).toMatchSnapshot();
  });

  describe('mapStateToProps tests', () => {
    it('Should pull animals from the store', () => {
      const mockStore = {
        animals: mockAnimals,
      };
      const result = mapStateToProps(mockStore);

      expect(result.animals).toEqual(mockStore.animals);
    });
  });

  describe('mapDispatchToProps tests', () => {
    it('Should call dispatch when searchAnimals is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.searchAnimals('fox', mockAnimalsArray, 'name');
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('Should call dispatch when setSearchValue is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.setSearchValue('chimp');
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
