const addPropertiesToAnimal = animalArray => {
  return animalArray.map(animal => {
    const image = animal.image_url;
    const display = true;

    return { ...animal, image, display };
  });
};

export default addPropertiesToAnimal;
