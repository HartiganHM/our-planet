import addPropertiesToAnimal from '../addPropertiesToAnimal/addPropertiesToAnimal';

const fetchAnimalsData = async () => {
  try {
    const fetchedData = await fetch('https://our-planet-be.herokuapp.com/api/v1/animals');
    const jsonData = await fetchedData.json();

    return addPropertiesToAnimal(jsonData);

  } catch (error) {
    return new Error(`Error fetching animals data: ${error}`);
  }
};

export default fetchAnimalsData;
