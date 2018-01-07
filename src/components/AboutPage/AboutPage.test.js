import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('AboutPage tests', () => {
  it('Should match the snapshot', () => {
    const renderedAboutPage = shallow(<AboutPage />);

    expect(renderedAboutPage).toMatchSnapshot();
  });
});
