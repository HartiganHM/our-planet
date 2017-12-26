import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card tests', () => {
  it('Should exist', () => {
    const renderedCard = shallow(<Card />);
    expect(renderedCard).toBeDefined();
  });
});
