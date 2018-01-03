const addPropertiesToContinent = continentsArray => {
  return continentsArray.map(continent => {
    const image = continent.name.includes('/')
      ? removeNonAlphaNumeric(continent.name)
      : continent.name.toLowerCase();

    return { ...continent, image };
  });
};

const removeNonAlphaNumeric = name => {
  return name
    .split(' /')
    .join('')
    .toLowerCase();
};

export default addPropertiesToContinent;
