import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import mockAnimalsArray from '../../data/mockAnimalsArray';

describe('Card tests', () => {
  it('Should match the snapshot', () => {
    const mockAnimal = mockAnimalsArray[0];
    const renderedCard = shallow(<Card animalData={mockAnimal} />);

    expect(renderedCard).toMatchSnapshot();
  });

  it('Should have an image that matches the animals name', () => {
    const mockAnimal = mockAnimalsArray[0];
    const expected = 'arctic fox.jpg';
    const renderedCard = shallow(<Card animalData={mockAnimal} />);

    expect(renderedCard.find('img').prop('src')).toEqual(expected);
  });
});
