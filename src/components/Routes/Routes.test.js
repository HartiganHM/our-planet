import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes tests', () => {
  it('Should exist', () => {
    const renderedRoutes = shallow(<Routes />);
    expect(renderedRoutes).toBeDefined();
  });
});
