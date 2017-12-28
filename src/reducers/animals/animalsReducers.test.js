import animalsReducers from './animalsReducers';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import * as actions from '../../actions';

describe('animalsReducers tests', () => {
  it('should return store by default', () => {
    const expected = [];

    expect(animalsReducers(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with animals', () => {
    const expected = {
      animalsData: mockAnimalsArray,
      type: 'STORE_ANIMAL_DATA'}
      ;

    expect(
      animalsReducers(undefined, actions.storeAnimalData(mockAnimalsArray))
    ).toEqual(expected);
  });
});
