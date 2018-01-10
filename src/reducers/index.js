import { combineReducers } from 'redux';
import animalsReducers from './animals/animalsReducers';
import continentsReducers from './continents/continentsReducers';


const rootReducer = combineReducers({
  animals: animalsReducers,
  continents: continentsReducers,
  filter: filterReducers
});

export default rootReducer;
