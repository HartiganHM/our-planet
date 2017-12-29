const continentsReducers = (store = [], action) => {
  switch (action.type) {
  case 'STORE_CONTINENTS_DATA':
    return action.continentsData;
  default:
    return store;
  }
};

export default continentsReducers;
