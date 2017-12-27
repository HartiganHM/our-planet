import fetchAnimalsData from '../helpers/fetchAnimalsData';
import fetchContinetsData from '../helpers/fetchContinentsData';

export const fetchAllData = () => async dispatch => {
  const animalsData = await fetchAnimalsData();
  const continentsData = await fetchContinentsData();
  dispatch(storeAnimalData(animalsData));
  dispath(storeContinentsData(continentsData));
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
  }
}