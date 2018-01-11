import React from 'react';
import { shallow } from 'enzyme';
import { FilterButtons, mapStateToProps } from './FilterButtons';

describe('FilterButton tests', () => {
  it('Should match the snapshot', () => {
    const mockFilter = 'default';
    const mockSwitchFilter = jest.fn();
    const renderedFilterButtons = shallow(
      <FilterButtons filter={mockFilter} switchFilter={mockSwitchFilter} />
    );
  });
});
