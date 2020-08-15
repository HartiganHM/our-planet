import mockContinentsArray from '../../data/mockContinentsArray';
import fetchContinentsData from './fetchContinentsData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockContinentsArray),
  })
);

describe('fetchContinentsData tests', () => {
  let mockContinets;

  beforeEach(async () => {
    mockContinets = await fetchContinentsData();
  });

  it('Should be called correctly', () => {
    expect(fetchContinentsData).toBeAFunction;
  });

  it('Should return an object when called', () => {
    expect(typeof mockContinets).toEqual('object');
  });

  it('Should throw an error when the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
      })
    );
    const expected = Error('Error fetching continents data: [object Object]');
    const mockContinents = await fetchContinentsData();

    expect(mockContinents).toEqual(expected);
  });
});
