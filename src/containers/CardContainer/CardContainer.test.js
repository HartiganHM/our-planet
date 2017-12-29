import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer tests', () => {
  it('Should exist', () => {
    const renderedCardContainer = shallow(<CardContainer />);
    expect(renderedCardContainer).toBeDefined();
  });
});
