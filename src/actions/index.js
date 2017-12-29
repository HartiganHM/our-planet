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

export const filterAnimals = (inputValue, animals) => {
  const searchValue = inputValue.toLowerCase();
  const filteredAnimals = animals.reduce((filteredAnimals, animal) => {
    animal.name.toLowerCase().includes(searchValue)
      ? (animal.display = true)
      : (animal.display = false);

    filteredAnimals.push(animal);

    return filteredAnimals;
  }, []);

  return {
    type: 'SEARCH_ANIMALS',
    filteredAnimals
  };
};
