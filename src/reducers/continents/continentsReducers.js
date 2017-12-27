const continentsReducers = (store = [], action) => {
  switch (action.type) {
    case 'STORE_CONTINENTS_DATA':
      return action;
    default:
      return store;
  }
};

export default continentsReducers;