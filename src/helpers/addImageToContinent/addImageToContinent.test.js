import addImageToContinent from './addImageToContinent';
import mockContinentsArray from '../../data/mockContinentsArray';

describe('addImageToContinent tests', () => {
  it('Should be a function', () => {
    expect(addImageToContinent).toBeAFunction;
  });

  it('Should return an array', () => {
    const continentsArray = addImageToContinent(mockContinentsArray);

    expect(typeof continentsArray).toEqual('object');
  });

  it('Should add an image matching each continents name', () => {
    const firstExpectedImage = '../../images/continents/africa.jpg';
    const secondExpectedImage = '../../images/continents/antarctica arctic.jpg';
    const continentsArray = addImageToContinent(mockContinentsArray);

    expect(continentsArray[0].image).toEqual(firstExpectedImage);
    expect(continentsArray[1].image).toEqual(secondExpectedImage);
  });
});
