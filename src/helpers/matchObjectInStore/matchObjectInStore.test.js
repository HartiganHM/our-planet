import matchObjectInStore from './matchObjectInStore';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import mockContinentsArray from '../../data/mockContinentsArray';

describe('matchObjectInStore tests', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      match: { params: { animal: 'Arctic Fox', continent: 'Africa' } },
      animals: mockAnimalsArray,
      continents: mockContinentsArray
    };
  });

  it('Should be a function', () => {
    expect(matchObjectInStore).toBeAFunction;
  });

  it('Should return an object', () => {
    const mockAnimal = matchObjectInStore(mockProps, 'animal', 'animals');

    expect(typeof mockAnimal).toEqual('object');
  });

  it('Should match an object from store based on props give', () => {
    const expected = mockAnimalsArray[0];
    const mockAnimal = matchObjectInStore(mockProps, 'animal', 'animals');

    expect(mockAnimal).toEqual(expected);
  });

  it('Should be able to match an animal and a continent', () => {
    const expectedAnimal = mockAnimalsArray[0];
    const mockAnimal = matchObjectInStore(mockProps, 'animal', 'animals');

    expect(mockAnimal.name).toEqual(expectedAnimal.name);

    const expectedContinent = mockContinentsArray[0];
    const mockContinet = matchObjectInStore(
      mockProps,
      'continent',
      'continents'
    );

    expect(mockContinet.name).toEqual(expectedContinent.name);
  });

  it('Should catch Antarctica outlier', () => {
    mockProps.match.params.continent = 'Antarctica ';
    const expectedContinentName = 'Antarctica / Arctic';
    const mockContinent = matchObjectInStore(
      mockProps,
      'continent',
      'continents'
    );

    expect(mockContinent.name).toEqual(expectedContinentName);
  });
});
