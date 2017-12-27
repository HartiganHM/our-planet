const animalsReducers = (store = [], action) => {
  switch (action.type) {
    case 'STORE_ANIMAL_DATA':
      return action;
    default:
      return store;
  }
};

export default animalsReducers;