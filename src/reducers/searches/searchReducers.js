const searchReducers = (store = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return action.searchValue;
    default:
      return store;
  }
};

export default searchReducers;
