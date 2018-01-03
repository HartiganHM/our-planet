matchObjectInStore = props, type, group => {
  const linkedObject = props.match.params[type];
  const animalData = props[group].find(
    object => object.name === linkedObject
  );
  animalData.image = animalData.name.toLowerCase();

  return objectData
};

