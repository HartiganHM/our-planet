const animalDataCleaner = animalData => {
  const cleanAnimalData = {
    Status: animalData.status,
    Population: animalData.population,
    'Scientific Name': animalData.scientific_name,
    Height: animalData.height,
    Weight: animalData.weight,
    Length: animalData.length,
    Habitat: animalData.habitat,
    'The Facts': animalData.facts,
    "Why I'm Important": animalData.human_benefit
  };

  return cleanAnimalData;
};

export default animalDataCleaner;
