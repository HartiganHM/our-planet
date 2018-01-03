import matchObjectInStore from './matchObjectInStore';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import mockContinentsArray from '../../data/mockContinentsArray';

describe('matchObjectInStore tests', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      match: { params: { animal: 'Arctic Fox', continent: 'Antarctica ' } },
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

  it('Should match an object from store based on props give', () => {});

  it('Should catch Antarctica outlier', () => {});

  it('should return an empty object if there are no matches', () => {});
});
