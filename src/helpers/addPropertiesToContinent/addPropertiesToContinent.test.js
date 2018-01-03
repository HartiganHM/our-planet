import addPropertiesToContinent from './addPropertiesToContinent';
import mockContinentsArray from '../../data/mockContinentsArray';

describe('addPropertiesToContinent tests', () => {
  it('Should be a function', () => {
    expect(addPropertiesToContinent).toBeAFunction;
  });

  it('Should return an array', () => {
    const continentsArray = addPropertiesToContinent(mockContinentsArray);

    expect(typeof continentsArray).toEqual('object');
  });

  it('Should add an image reference matching each continents name', () => {
    const firstExpectedImage = 'africa';
    const secondExpectedImage = 'antarctica arctic';
    const continentsArray = addPropertiesToContinent(mockContinentsArray);

    expect(continentsArray[0].image).toEqual(firstExpectedImage);
    expect(continentsArray[1].image).toEqual(secondExpectedImage);
  });
});
