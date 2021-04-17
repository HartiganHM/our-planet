import {
  fetchAnimalsData,
  fetchContinentsData,
  filterAnimals,
} from '../helpers';

export const fetchAllData = () => async dispatch => {
  const animalsData = await fetchAnimalsData();
  const continentsData = await fetchContinentsData();
  dispatch(storeAnimalData(animalsData));
  dispatch(storeContinentsData(continentsData));
};

export const storeAnimalData = animalsData => {
  return {
    type: 'STORE_ANIMAL_DATA',
    animalsData,
  };
};

export const storeContinentsData = continentsData => {
  return {
    type: 'STORE_CONTINENTS_DATA',
    continentsData,
  };
};

export const searchAnimals = (inputValue, animals, property) => {
  const filteredAnimals = filterAnimals(inputValue, animals, property);

  return {
    type: 'SEARCH_ANIMALS',
    filteredAnimals,
  };
};

export const changeFilter = filterValue => {
  return {
    type: 'CHANGE_FILTER',
    filterValue,
  };
};

export const changeSearch = searchValue => {
  return {
    type: 'CHANGE_SEARCH',
    searchValue,
  };
};
