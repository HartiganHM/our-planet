import React from 'react';
import { shallow } from 'enzyme';
import Sticky from './Sticky';

describe('Sticky tests', () => {
  it('Should match the snapshot', () => {
    const mockLocation = { location: { pathname: '/' } };
    const renderedSticky = shallow(<Sticky location={mockLocation} />);

    expect(renderedSticky).toMatchSnapshot();
  });
});
