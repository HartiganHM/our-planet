import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';
import mockAnimalsArray from '../../data/mockAnimalsArray';
import mockContinentsArray from '../../data/mockContinentsArray';

describe('CardContainer tests', () => {
  let renderedCardContainer;
  let animalsArray;
  let mockFilter;

  beforeEach(() => {
    mockFilter = 'default';
    animalsArray = mockAnimalsArray.map(animal => {
      return { ...animal, display: true };
    });
    renderedCardContainer = shallow(
      <CardContainer
        animals={animalsArray}
        continents={mockContinentsArray}
        filter={mockFilter}
      />
    );
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

  it('Should display a placeholder if continentAnimals is empty', () => {
    const expectedElement = '.content-placeholder';
    const message = 'There are currently no endangered animals in this region';
    expect(renderedCardContainer.find(expectedElement).length).toEqual(0);

    renderedCardContainer = shallow(
      <CardContainer animals={animalsArray} continentAnimals={[]} />
    );
    expect(renderedCardContainer.find(expectedElement).length).toEqual(1);
    expect(renderedCardContainer.find(expectedElement).text()).toEqual(message);
  });

  it('Should display a placehold while the cards are loading', () => {
    const expectedElement = '.content-placeholder';
    const message = 'Loading';
    expect(renderedCardContainer.find(expectedElement).length).toEqual(0);

    renderedCardContainer = shallow(<CardContainer animals={[]} />);

    expect(renderedCardContainer.find(expectedElement).length).toEqual(1);
    expect(renderedCardContainer.find(expectedElement).text()).toEqual(message);
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
