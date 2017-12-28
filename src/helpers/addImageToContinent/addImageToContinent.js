const addImageToContinents = continentsArray => {
  return continentsArray.map(continent => {
    const name = continent.name.includes('/') ? removeNonAlphaNumeric(continent.name) : continent.name.toLowerCase();
    const image = `../../images/continents/${name}.jpg`;

    return { ...continent, image };
  });
};

export const removeNonAlphaNumeric = name => {
  return name.split(' /').join('').toLowerCase()
}

export default addImageToContinents;
