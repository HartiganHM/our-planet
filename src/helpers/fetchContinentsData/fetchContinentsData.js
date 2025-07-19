import addPropertiesToContinent from '../addPropertiesToContinent/addPropertiesToContinent';
import getApiRoot from '../getApiRoot/getApiRoot';

const fetchContinentsData = async () => {
  try {
    const apiRoot = getApiRoot();
    const fetchedData = await fetch(`${apiRoot}/v1/one-planet/continents`);
    const jsonData = await fetchedData.json();

    return addPropertiesToContinent(jsonData);
  } catch (error) {
    return new Error(`Error fetching continents data: ${error}`);
  }
};

export default fetchContinentsData;
