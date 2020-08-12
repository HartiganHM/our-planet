import addPropertiesToAnimal from '../addPropertiesToAnimal/addPropertiesToAnimal';
import sortAnimalsAlphabetically from '../sortAnimalsAlphabetically/sortAnimalsAlphabetically';

const fetchAnimalsData = async () => {
  const {
    NODE_ENV,
    REACT_APP_API_ROOT_DEV,
    REACT_APP_API_ROOT_PROD,
  } = process.env;

  try {
    const fetchedData = await fetch(
      `${
        NODE_ENV === 'development'
          ? REACT_APP_API_ROOT_DEV
          : REACT_APP_API_ROOT_PROD
      }/api/v1/animals`
    );
    const jsonData = await fetchedData.json();
    const newAnimals = addPropertiesToAnimal(jsonData);
    newAnimals._filter = 'default';

    return sortAnimalsAlphabetically(newAnimals);
  } catch (error) {
    return new Error(`Error fetching animals data: ${error}`);
  }
};

export default fetchAnimalsData;
