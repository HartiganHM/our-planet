import searchReducers from './searchReducers';
import * as actions from '../../actions';

describe('searchReducers tests', () => {
  it('Should return store by default', () => {
    const expected = '';

    expect(searchReducers(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a different search value', () => {
    const expected = 'whal';

    expect(searchReducers(undefined, actions.changeSearch('whal')))
      .toEqual(expected);
  });
});
