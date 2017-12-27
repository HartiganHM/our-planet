const fetchContinentsData = async () => {
  try {
    const fetchedData = await fetch('http://localhost:3001/api/v1/continents');
    const jsonData = await fetchedData.json();
    return jsonData;

  } catch (error) {
    return new Error(`Error fetching continents data: ${error}`);
  }
};

export default fetchContinentsData;
