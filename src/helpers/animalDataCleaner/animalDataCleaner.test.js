import animalDataCleaner from './animalDataCleaner';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import mockCleanAnimalData from '../../data/mockCleanAnimalData';

describe('animalDataCleaner tests', () => {
  it('animalDataCleaner should return an object', () => {
    const mockCleanedData = animalDataCleaner(mockAnimalsArray[0]);

    expect(typeof mockCleanedData).toEqual('object');
  });

  it('animalDataCleaner should clean data properties', () => {
    const mockCleanedData = animalDataCleaner(mockAnimalsArray[0]);
    const expected = mockCleanAnimalData;

    expect(mockCleanedData).toEqual(expected);
  });
});
