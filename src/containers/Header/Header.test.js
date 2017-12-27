import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Header, mapDispatchToProps } from './Header';

describe('Header tests', () => {
  it('Should exist', () => {
    const mockPopulateData = jest.fn();
    const renderedHeader = shallow(<Header populateData={mockPopulateData}/>);
    expect(renderedHeader).toBeDefined();
  });
});
