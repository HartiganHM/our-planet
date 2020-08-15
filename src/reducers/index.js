import { combineReducers } from 'redux';
import animalsReducers from './animals/animalsReducers';
import continentsReducers from './continents/continentsReducers';
import filterReducers from './filters/filtersReducers';
import searchReducers from './searches/searchReducers';

const rootReducer = combineReducers({
  animals: animalsReducers,
  continents: continentsReducers,
  filter: filterReducers,
  searchValue: searchReducers,
});

export default rootReducer;
