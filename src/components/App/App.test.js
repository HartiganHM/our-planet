import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {
  it('Should exist', () => {
    const renderedApp = shallow(<App />);
    expect(renderedApp).toBeDefined();
  });
});
