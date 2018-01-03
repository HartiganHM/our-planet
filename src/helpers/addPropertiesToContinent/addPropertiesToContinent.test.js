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

  it('Should remove foreign characters from the image name', () => {
    const initialName = 'Antarctica / Arctic';
    const expected = 'antarctica arctic';
    const continentsArray = addPropertiesToContinent(mockContinentsArray);

    expect(mockContinentsArray[1].name).toEqual(initialName);
    expect(continentsArray[1].image).toEqual(expected);
  });
});
