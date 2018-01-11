import filtersReducers from './filtersReducers';
import * as actions from '../../actions';

describe('filtersReducers tests', () => {
  it('Should return store by default', () => {
    const expected = 'default';

    expect(filtersReducers(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a different filter', () => {
    const expected = 'habitat';

    expect(filtersReducers(undefined, actions.changeFilter('habitat')))
      .toEqual(expected);
  });
});
