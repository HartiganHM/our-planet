import mockContinentsArray from '../../data/mockContinentsArray';
import fetchContinentsData from './fetchContinentsData';

describe('fetchContinentsData tests', () => {
  let mockContinets;

  beforeEach( async () => {
    mockContinets = await fetchContinentsData();
  });

  it('Should be called correctly', () => {

  });

  it('Should return an object when called', () => {

  });

  it('Should throw an error when the fetch fails', () => {

  });
});