import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header tests', () => {
  it('Should exist', () => {
    const renderedHeader = shallow(<Header />);
    expect(renderedHeader).toBeDefined();
  });
});
