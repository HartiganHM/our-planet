import addPropertiesToContinent from '../addPropertiesToContinent/addPropertiesToContinent';

const fetchContinentsData = async () => {
  try {
    const apiRoot = getApiRoot();
    const fetchedData = await fetch(`${apiRoot}/api/v1/continents`);
    const jsonData = await fetchedData.json();

    return addPropertiesToContinent(jsonData);
  } catch (error) {
    return new Error(`Error fetching continents data: ${error}`);
  }
};

export default fetchContinentsData;
