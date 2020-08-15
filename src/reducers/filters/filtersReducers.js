const filtersReducers = (store = 'default', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filterValue;
    default:
      return store;
  }
};

export default filtersReducers;
