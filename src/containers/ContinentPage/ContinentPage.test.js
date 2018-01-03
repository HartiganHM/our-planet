import React from 'react';
import { shallow } from 'enzyme';
import { ContinentPage, mapStateToProps } from './ContinentPage';
import mockContinentsArray from '../../data/mockContinentsArray';
import mockProps from '../../data/mockProps';

describe('ContinentPage tests', () => {
  let renderedContinentPage;

  beforeEach(() => {
    renderedContinentPage = shallow(
      <ContinentPage
        animals={mockProps.animals}
        continents={mockProps.continents}
        match={mockProps.match}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedContinentPage).toMatchSnapshot();
  });
});
