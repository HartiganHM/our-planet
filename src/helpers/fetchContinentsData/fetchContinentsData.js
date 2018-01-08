import addPropertiesToContinent from '../addPropertiesToContinent/addPropertiesToContinent';

const fetchContinentsData = async () => {
  try {
    const fetchedData = await fetch('https://our-planet-be.herokuapp.com/api/v1/continents');
    const jsonData = await fetchedData.json();
    return addPropertiesToContinent(jsonData);

  } catch (error) {
    return new Error(`Error fetching continents data: ${error}`);
  }
};

export default fetchContinentsData;
