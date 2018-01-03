import mockAnimalsArray from './mockAnimalsArray';
import mockContinentsArray from './mockContinentsArray';

const mockProps = {
  match: { params: { animal: 'Arctic Fox', continent: 'Africa' } },
  animals: mockAnimalsArray,
  continents: mockContinentsArray
};

export default mockProps;
