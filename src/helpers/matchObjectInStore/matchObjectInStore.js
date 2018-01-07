const matchObjectInStore = (props, type, group) => {
  const linkedObject =
    props.match.params[type] === 'Antarctica Arctic'
      ? 'Antarctica / Arctic'
      : props.match.params[type];
      console.log(linkedObject);
  const objectData = props[group].find(object => object.name === linkedObject);

  return objectData;
};

export default matchObjectInStore;
