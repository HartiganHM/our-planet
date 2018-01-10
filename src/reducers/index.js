import { combineReducers } from 'redux';
import animalsReducers from './animals/animalsReducers';
import continentsReducers from './continents/continentsReducers';
import filterReducers from './filters/filtersReducers';


const rootReducer = combineReducers({
  animals: animalsReducers,
  continents: continentsReducers,
  filter: filterReducers
});

export default rootReducer;
