const LOCAL_API_ROOT = 'http://localhost:8080';
const PROD_API_ROOT = 'https://our-planet-api.onrender.com';

const getApiRoot = () => {
  const { NODE_ENV } = process.env;

  const apiRoot = NODE_ENV === 'development' ? LOCAL_API_ROOT : PROD_API_ROOT;

  return apiRoot;
};

export default getApiRoot;
