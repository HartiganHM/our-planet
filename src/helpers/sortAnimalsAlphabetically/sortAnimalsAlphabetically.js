const sortAnimalsAlphabetically = animals => {
  return animals.sort((animalA, animalB) => {
    const nameA = animalA.name.toLowerCase().split(' ')[0];
    const nameB = animalB.name.toLowerCase().split(' ')[0];
    console.log(nameA, nameB)
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
};

export default sortAnimalsAlphabetically;