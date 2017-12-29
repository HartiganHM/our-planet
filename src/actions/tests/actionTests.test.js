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

  it('filterAnimals should have a type of SEARCH_ANIMALS', () => {
    const filteredAnimals = mockAnimalsArray;
    const expected = {
      type: 'SEARCH_ANIMALS',
      filteredAnimals
    };

    expect(actions.filterAnimals('fox', filteredAnimals)).toEqual(expected);
  });
});
