const addImageToAnimal = animalArray => {
  return animalArray.map(animal => {
    const name = animal.name.toLowerCase()
    const image = `../../images/animals/${name}`;

    return { ...animal, image };
  });
};

export default addImageToAnimal;