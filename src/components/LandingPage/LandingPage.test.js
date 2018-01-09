import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('LandingPage tests', () => {
  it('Should match the snapshot', () => {
    const renderedLandingPage = shallow(<LandingPage />);

    expect(renderedLandingPage).toMatchSnapshot();
  });
});
