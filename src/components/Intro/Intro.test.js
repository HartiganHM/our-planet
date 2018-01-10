import React from 'react';
import { shallow } from 'enzyme';
import Intro from './Intro';

describe('Intro tests', () => {
  it('Should match the snapshot', () => {
    const renderedIntro = shallow(<Intro />);

    expect(renderedIntro).toMatchSnapshot();
  });
});
