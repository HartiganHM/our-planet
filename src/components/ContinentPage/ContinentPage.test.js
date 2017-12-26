import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ContinentPage from './ContinentPage';

describe('ContinentPage tests', () => {
  it('Should exist', () => {
    const renderedContinentPage = shallow(<ContinentPage />);
    expect(renderedContinentPage).toBeDefined();
  });
});
