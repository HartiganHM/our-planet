import sortAnimalsAlphabetically from './sortAnimalsAlphabetically';
import mockAnimalsArray from '../../data/mockAnimalsArray';

describe('sortAnimalsAlphabetically tests', () => {
  it('Should be a function', () => {
    expect(sortAnimalsAlphabetically).toBeAFunction;
  });

  it('Should return an array', () => {
    const mockSortedAnimals = sortAnimalsAlphabetically(mockAnimalsArray);

    expect(typeof mockSortedAnimals).toEqual('object');
  });

  it('Should sort animals by name alphabetically', () => {
    const jumbledArray = [{ name: 'Whale' }, { name: 'Arctic Wolf' }];
    const expected = [{ name: 'Arctic Wolf' }, { name: 'Whale' }];
    const mockSortedAnimals = sortAnimalsAlphabetically(jumbledArray);

    expect(mockSortedAnimals).toEqual(expected);
  });
});
