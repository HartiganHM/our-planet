import React from 'react';
import { shallow } from 'enzyme';
import {
  FilterButtons,
  mapStateToProps,
  mapDispatchToProps,
} from './FilterButtons';

describe('FilterButton tests', () => {
  it('Should match the snapshot', () => {
    const mockFilter = 'default';
    const mockSwitchFilter = jest.fn();
    const renderedFilterButtons = shallow(
      <FilterButtons filter={mockFilter} switchFilter={mockSwitchFilter} />
    );

    expect(renderedFilterButtons).toMatchSnapshot();
  });

  describe('mapStateToProps tests', () => {
    it('Should pull filter from the store', () => {
      const mockStore = {
        filter: 'status',
      };
      const result = mapStateToProps(mockStore);

      expect(result.filter).toEqual(mockStore.filter);
    });
  });

  describe('mapDispatchToProps tests', () => {
    it('Should call dispatch when switchFilter is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.switchFilter('habitat');
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
