import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search tests', () => {
  it('Should exist', () => {
    const renderedSearch = shallow(<Search />);
    expect(renderedSearch).toBeDefined();
  });
});
