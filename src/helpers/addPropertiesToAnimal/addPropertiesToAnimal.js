const addPropertiesToAnimal = animalArray => {
  return animalArray.map(animal => {
    const image = animal.name.toLowerCase();
    const display = true;

    return { ...animal, image, display };
  });
};

export default addPropertiesToAnimal;
