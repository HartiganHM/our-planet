import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AnimalPage from './AnimalPage';

describe('AnimalPage tests', () => {
  it('Should exist', () => {
    const renderedAnimalPage = shallow(<AnimalPage />);
    expect(renderedAnimalPage).toBeDefined();
  });
});
