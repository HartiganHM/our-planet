import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';
import mockAnimalsArray from '../../data/mockAnimalsArray';

describe('CardContainer tests', () => {
  let renderedCardContainer;

  beforeEach(() => {
    renderedCardContainer = shallow(
      <CardContainer animals={mockAnimalsArray} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('Should display Cards', () => {
    expect(renderedCardContainer.find('Card').length).toEqual(2);
  });

  it('Should not render certain cards if display is false', () => {
    mockAnimalsArray[0].display = false;
    renderedCardContainer = shallow(
      <CardContainer animals={mockAnimalsArray} />
    );

    expect(renderedCardContainer.find('Card').length).toEqual(1);
  });

  describe('mapStateToProps tests', () => {
    it('Should pull animals from the store', () => {
      const mockStore = {
        animals: mockAnimalsArray
      };
      const result = mapStateToProps(mockStore);

      expect(result.user).toEqual(mockStore.user);
    });
  });
});
