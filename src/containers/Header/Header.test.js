import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Header, mapDispatchToProps } from './Header';
import * as actions from '../../actions';

describe('Header tests', () => {
  it('Should match the snapshot', () => {
    const mockPopulateData = jest.fn();
    const renderedHeader = shallow(<Header populateData={mockPopulateData} />);
    expect(renderedHeader).toMatchSnapshot();
  });

  describe('Header mapDispatchToProps tests', () => {
    it('Should call dispatch when populateData is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.populateData();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
