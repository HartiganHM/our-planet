import filterAnimals from './filterAnimals';
import mockAnimalsArray from '../../data/mockAnimalsArray';

describe('filterAnimals tests', () => {
  it('Should be a function', () => {
    expect(filterAnimals).toBeAFunction;
  });

  it('Should return an object', () => {
    expect(typeof filterAnimals('a', mockAnimalsArray)).toEqual('object');
  });

  it('Should should change an animals display property based on the input value', () => {
    const expectedDisplayMatching = true;
    const expectedDisplayNonMatching = false;
    const mockFilteredAnimals = filterAnimals('fox', mockAnimalsArray);

    expect(mockFilteredAnimals[0].display).toEqual(expectedDisplayMatching);
    expect(mockFilteredAnimals[1].display).toEqual(expectedDisplayNonMatching);
  });

  it('Should set all display properties to false if no animals match the input value', () => {
    const mockFilteredAnimals = filterAnimals('whale', mockAnimalsArray);
    const expected = false;

    expect(mockFilteredAnimals[0].display).toEqual(expected);
    expect(mockFilteredAnimals[1].display).toEqual(expected);
  });
});
