import addPropertiesToAnimal from './addPropertiesToAnimal';
import mockAnimalsArray from '../../data/mockAnimalsArray';

describe('addPropertiesToAnimal tests', () => {
  it('Should be a function', () => {
    expect(addPropertiesToAnimal).toBeAFunction;
  });

  it('Should return an array', () => {
    const animalsArray = addPropertiesToAnimal(mockAnimalsArray);

    expect(typeof animalsArray).toEqual('object');
  });

  it('Should add an image reference matching each animals name', () => {
    expect(mockAnimalsArray[0].image).toEqual(undefined);

    const firstExpectedImage = 'https://our-planet.s3-us-west-2.amazonaws.com/animals/arctic+fox.jpg';
    const secondExpectedImage = 'https://our-planet.s3-us-west-2.amazonaws.com/animals/arctic+wolf.jpg';
    const animalsArray = addPropertiesToAnimal(mockAnimalsArray);

    expect(animalsArray[0].image).toEqual(firstExpectedImage);
    expect(animalsArray[1].image).toEqual(secondExpectedImage);
  });

  it('Should add a display property of true', () => {
    expect(mockAnimalsArray[0].display).toEqual(undefined);
    expect(mockAnimalsArray[1].display).toEqual(undefined);

    const animalsArray = addPropertiesToAnimal(mockAnimalsArray);
    const expected = true;

    expect(animalsArray[0].display).toEqual(expected);
    expect(animalsArray[1].display).toEqual(expected);
  });
});
