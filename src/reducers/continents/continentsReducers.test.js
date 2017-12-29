import continentsReducers from './continentsReducers';
import mockContinentsArray from '../../data/mockContinentsArray';
import * as actions from '../../actions';

describe('continentsReducers tests', () => {
  it('Should return store by default', () => {
    const expected = [];

    expect(continentsReducers(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with continents', () => {
    const expected = mockContinentsArray;

    expect(
      continentsReducers(
        undefined,
        actions.storeContinentsData(mockContinentsArray)
      )
    ).toEqual(expected);
  });
});
