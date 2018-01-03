import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';
import mockAnimalsArray from '../../data/mockAnimalsArray';

describe('CardContainer tests', () => {
  let renderedCardContainer;
  let animalsArray;

  beforeEach(() => {
    animalsArray = mockAnimalsArray.map(animal => {
      return { ...animal, display: true };
    });
    renderedCardContainer = shallow(<CardContainer animals={animalsArray} />);
  });

  it('Should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('Should display Cards', () => {
    expect(renderedCardContainer.find('Card').length).toEqual(2);
  });

  it('Should not render certain cards if display is false', () => {
    animalsArray[0].display = false;
    renderedCardContainer = shallow(<CardContainer animals={animalsArray} />);

    expect(renderedCardContainer.find('Card').length).toEqual(1);
  });

  it('Should display different animals when receiving continentAnimals', () => {
    renderedCardContainer = shallow(
      <CardContainer
        animals={animalsArray}
        continentAnimals={[animalsArray[0]]}
      />
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
