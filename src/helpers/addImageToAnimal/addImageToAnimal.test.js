import addImageToAnimal from './addImageToAnimal';
import mockAnimalsArray from '../../data/mockAnimalsArray';

describe('addImageToAnimal tests', () => {
  it('Should be a function', () => {
    expect(addImageToAnimal).toBeAFunction;
  });

  it('Should return an array', () => {
    const animalsArray = addImageToAnimal(mockAnimalsArray);

    expect(typeof animalsArray).toEqual('object');
  });

  it('Should add an image matching each animals name', () => {
    const firstExpectedImage = '../../images/animals/arctic fox.jpg';
    const secondExpectedImage = '../../images/animals/arctic wolf.jpg';
    const animalsArray = addImageToAnimal(mockAnimalsArray);

    expect(animalsArray[0].image).toEqual(firstExpectedImage);
    expect(animalsArray[1].image).toEqual(secondExpectedImage);
  });
});
