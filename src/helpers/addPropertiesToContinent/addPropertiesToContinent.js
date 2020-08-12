const addPropertiesToContinent = continentsArray => {
  return continentsArray.map(continent => {
    const image = continent.image_url;

    return { ...continent, image };
  });
};

export default addPropertiesToContinent;
