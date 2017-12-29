const addImageToAnimal = animalArray => {
  return animalArray.map(animal => {
    const name = animal.name.toLowerCase();
    const image = `../../images/animals/${name}.jpg`;
    const display = true;

    return { ...animal, image, display };
  });
};

export default addImageToAnimal;
