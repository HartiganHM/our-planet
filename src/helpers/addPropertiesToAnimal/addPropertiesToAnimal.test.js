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

  it('Should add an image matching each animals name', () => {
    const firstExpectedImage = '../../images/animals/arctic fox.jpg';
    const secondExpectedImage = '../../images/animals/arctic wolf.jpg';
    const animalsArray = addPropertiesToAnimal(mockAnimalsArray);

    expect(animalsArray[0].image).toEqual(firstExpectedImage);
    expect(animalsArray[1].image).toEqual(secondExpectedImage);
  });
});
