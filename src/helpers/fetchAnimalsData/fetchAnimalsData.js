const fetchAnimalsData = async () => {
  try {
    const fetchedData = await fetch('http://localhost:3001/api/v1/animals');
    const jsonData = await fetchedData.json();
    return jsonData;

  } catch (error) {
    return new Error(`Error fetching animals data: ${error}`);
  }
};

export default fetchAnimalsData;
