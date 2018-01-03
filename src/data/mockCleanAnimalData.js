import animalData from './mockAnimalsArray';

const mockCleanAnimalData = {
  Status: animalData[0].status,
  Population: animalData[0].population,
  'Scientific Name': animalData[0].scientific_name,
  Height: animalData[0].height,
  Weight: animalData[0].weight,
  Length: animalData[0].length,
  Habitat: animalData[0].habitat,
  'The Facts': animalData[0].facts,
  "Why I'm Important": animalData[0].human_benefit
};

export default mockCleanAnimalData;