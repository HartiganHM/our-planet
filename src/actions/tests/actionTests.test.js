import * as actions from '../index';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import mockContinentsArray from '../../data/mockContinentsArray';

describe('Actions tests', () => {
  it('storeAnimalData should have a type of STORE_ANIMAL_DATA', () => {
    const animalsData = mockAnimalsArray;
    const expected = {
      type: 'STORE_ANIMAL_DATA',
      animalsData
    };

    expect(actions.storeAnimalData(animalsData)).toEqual(expected);
  });

  it('storeContinetsData should have a type of STORE_CONTINENTS_DATA', () => {
    const continentsData = mockContinentsArray;
    const expected = {
      type: 'STORE_CONTINENTS_DATA',
      continentsData
    };

    expect(actions.storeContinentsData(continentsData)).toEqual(expected);
  });

  it('searchAnimals should have a type of SEARCH_ANIMALS', () => {
    const filteredAnimals = mockAnimalsArray;
    const expected = {
      type: 'SEARCH_ANIMALS',
      filteredAnimals
    };

    expect(actions.searchAnimals('fox', filteredAnimals, 'name')).toEqual(
      expected
    );
  });

  it('changeFilter should have a type of CHANGE_FILTER', () => {
    const filterValue = 'status';
    const expected = {
      type: 'CHANGE_FILTER',
      filterValue
    };

    expect(actions.changeFilter(filterValue)).toEqual(expected);
  });
});
