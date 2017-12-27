const fetchAnimalsData = async () => {
  const fetchedData = await fetch('http://localhost:3001/api/v1/continents')
  const jsonData = await fetchedData.json();
  return jsonData
}

export default fetchAnimalsData;