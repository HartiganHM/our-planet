import mockAnimalsArray from '../../data/mockAnimalsArray';
import fetchAnimalsData from './fetchAnimalsData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockAnimalsArray)
  })
);

describe('fetchAnimalsData tests', () => {
  let mockAnimalsData;

  beforeEach(async () => {
    mockAnimalsData = await fetchAnimalsData();
  });

  it('Should be called correctly', () => {
    expect(fetchAnimalsData).toBeAFunction;
  });

  it('Should return an object when called', async () => {
    expect(typeof mockAnimalsData).toEqual('object');
  });

  it('Should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );
    const mockAnimalsData = await fetchAnimalsData();
    const expected = Error('Error fetching animals data: [object Object]');

    expect(mockAnimalsData).toEqual(expected);
  });
});
