const animalsReducers = (store = [], action) => {
  switch (action.type) {
  case 'STORE_ANIMAL_DATA':
    return action.animalsData;

  case 'SEARCH_ANIMALS':
    console.log(action.filteredAnimals)
    return action.filteredAnimals;

  default:
    return store;
  }
};

export default animalsReducers;