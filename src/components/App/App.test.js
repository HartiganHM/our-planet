import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {
  it('Should match the snapshot', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toMatchSnapshot();
  });
});
