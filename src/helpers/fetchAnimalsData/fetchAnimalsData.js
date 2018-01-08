import addPropertiesToAnimal from '../addPropertiesToAnimal/addPropertiesToAnimal';
import sortAnimalsAlphabetically from '../sortAnimalsAlphabetically/sortAnimalsAlphabetically';

const fetchAnimalsData = async () => {
  try {
    const fetchedData = await fetch('https://our-planet-be.herokuapp.com/api/v1/animals');
    const jsonData = await fetchedData.json();
    const newAnimals = addPropertiesToAnimal(jsonData);
    const sortedAnimals = sortAnimalsAlphabetically(newAnimals)

    return sortedAnimals;

  } catch (error) {
    return new Error(`Error fetching animals data: ${error}`);
  }
};

export default fetchAnimalsData;
