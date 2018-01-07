const matchObjectInStore = (props, type, group) => {
  const linkedObject =
    props.match.params[type] === 'Antarctica Arctic'
      ? 'Antarctica / Arctic'
      : props.match.params[type];
  const objectData = props[group].find(object => object.name === linkedObject);

  return objectData;
};

export default matchObjectInStore;
