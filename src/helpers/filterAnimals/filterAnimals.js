const filterAnimals = (inputValue, animals) => {
  const searchValue = inputValue.toLowerCase();
  const filteredAnimals = animals.reduce((filteredAnimals, animal) => {
    animal.name.toLowerCase().includes(searchValue)
      ? (animal.display = true)
      : (animal.display = false);

    filteredAnimals.push(animal);

    return filteredAnimals;
  }, []);

  return filteredAnimals;
};

export default filterAnimals;
