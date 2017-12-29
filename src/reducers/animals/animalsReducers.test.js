import animalsReducers from './animalsReducers';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import * as actions from '../../actions';

describe('animalsReducers tests', () => {
  it('should return store by default', () => {
    const expected = [];

    expect(animalsReducers(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with animals', () => {
    const expected = mockAnimalsArray;

    expect(
      animalsReducers(undefined, actions.storeAnimalData(mockAnimalsArray))
    ).toEqual(expected);
  });
});
