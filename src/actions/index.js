import fetchAnimalsData from '../helpers/fetchAnimalsData/fetchAnimalsData';
import fetchContinentsData from '../helpers/fetchContinentsData/fetchContinentsData';

export const fetchAllData = () => async dispatch => {
  const animalsData = await fetchAnimalsData();
  const continentsData = await fetchContinentsData();
  dispatch(storeAnimalData(animalsData));
  dispatch(storeContinentsData(continentsData));
};

export const storeAnimalData = animalsData => {
  return {
    type: 'STORE_ANIMAL_DATA',
    animalsData
  };
};

export const storeContinentsData = continentsData => {
  return {
    type: 'STORE_CONTINENTS_DATA',
    continentsData
  };
};
