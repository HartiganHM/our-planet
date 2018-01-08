const sortAnimalsAlphabetically = animals => {
  return animals.sort((aAnimal, bAnimals) => {
    const aName = aAnimal.name.toLowerCase();
    const bName = bAnimal.name.toLowerCase();;

    return bName - aName;
  });
};

export default sortAnimalsAlphabetically;