import addPropertiesToContinent from '../addPropertiesToContinent/addPropertiesToContinent';

const fetchContinentsData = async () => {
  const {
    NODE_ENV,
    REACT_APP_API_ROOT_DEV,
    REACT_APP_API_ROOT_PROD
  } = process.env;

  try {
    const fetchedData = await fetch(
      `${
        NODE_ENV === 'development'
          ? REACT_APP_API_ROOT_DEV
          : REACT_APP_API_ROOT_PROD
      }/api/v1/continents`
    );
    const jsonData = await fetchedData.json();
    return addPropertiesToContinent(jsonData);
  } catch (error) {
    return new Error(`Error fetching continents data: ${error}`);
  }
};

export default fetchContinentsData;
