import addPropertiesToAnimal from '../addPropertiesToAnimal/addPropertiesToAnimal';
import getApiRoot from '../getApiRoot/getApiRoot';
import sortAnimalsAlphabetically from '../sortAnimalsAlphabetically/sortAnimalsAlphabetically';

const fetchAnimalsData = async () => {
  try {
    const apiRoot = getApiRoot();
    const fetchedData = await fetch(`${apiRoot}/v1/one-planet/animals`);
    const jsonData = await fetchedData.json();
    const newAnimals = addPropertiesToAnimal(jsonData);
    newAnimals._filter = 'default';

    return sortAnimalsAlphabetically(newAnimals);
  } catch (error) {
    return new Error(`Error fetching animals data: ${error}`);
  }
};

export default fetchAnimalsData;
