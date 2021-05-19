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
    const firstExpectedImage =
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/africa.jpg';
    const secondExpectedImage =
      'https://our-planet.s3-us-west-2.amazonaws.com/continents/antarctica+arctic.jpg';
    const continentsArray = addPropertiesToContinent(mockContinentsArray);

    expect(continentsArray[0].image).toEqual(firstExpectedImage);
    expect(continentsArray[1].image).toEqual(secondExpectedImage);
  });
});
