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
    renderedCardContainer = shallow(
      <CardContainer
        animals={animalsArray}
        continents={mockContinentsArray}
        filter={mockFilter}
      />
    );

    expect(renderedCardContainer.find('Card').length).toEqual(1);
  });

  it('Should display different animals when receiving continentAnimals', () => {
    renderedCardContainer = shallow(
      <CardContainer
        animals={animalsArray}
        continentAnimals={[animalsArray[0]]}
        continents={mockContinentsArray}
        filter={mockFilter}
      />
    );

    expect(renderedCardContainer.find('Card').length).toEqual(1);
  });

  it('Should display a placeholder if continentAnimals is empty', () => {
    const expectedElement = '.content-placeholder';
    const message = 'There are currently no endangered animals in this region';
    expect(renderedCardContainer.find(expectedElement).length).toEqual(0);

    renderedCardContainer = shallow(
      <CardContainer
        animals={animalsArray}
        continentAnimals={[]}
        continents={mockContinentsArray}
        filter={mockFilter}
      />
    );
    expect(renderedCardContainer.find(expectedElement).length).toEqual(1);
    expect(renderedCardContainer.find(expectedElement).text()).toEqual(message);
  });

  it('Should display a placehold if there are no animals', () => {
    const expectedElement = '.content-placeholder';
    const message = 'That animal is not endangered!';
    expect(renderedCardContainer.find(expectedElement).length).toEqual(0);

    renderedCardContainer = shallow(
      <CardContainer
        animals={[]}
        continents={mockContinentsArray}
        filter={mockFilter}
      />
    );

    expect(renderedCardContainer.find(expectedElement).length).toEqual(1);
    expect(renderedCardContainer.find(expectedElement).text()).toEqual(message);
  });

  it('Should display header sections if the filter is habitat', () => {
    const expectedElement = '.filter-header';
    const expectedLength = 1;
    const expectedText = 'Antarctica / Arctic';
    expect(renderedCardContainer.find(expectedElement).length).toEqual(0);

    renderedCardContainer = shallow(
      <CardContainer
        animals={animalsArray}
        continents={mockContinentsArray}
        filter="habitat"
      />
    );

    expect(renderedCardContainer.find(expectedElement).length).toEqual(
      expectedLength
    );
    expect(renderedCardContainer.find(expectedElement).text()).toEqual(
      expectedText
    );
  });

  it('Should display header sections if the filter is status', () => {
    const expectedElement = '.filter-header';
    const expectedLength = 1;
    const expectedText = 'Least Concern';
    expect(renderedCardContainer.find(expectedElement).length).toEqual(0);

    renderedCardContainer = shallow(
      <CardContainer
        animals={animalsArray}
        continents={mockContinentsArray}
        filter="status"
      />
    );

    expect(renderedCardContainer.find(expectedElement).length).toEqual(
      expectedLength
    );
    expect(renderedCardContainer.find(expectedElement).text()).toEqual(
      expectedText
    );
  });

  describe('mapStateToProps tests', () => {
    it('Should pull animals from the store', () => {
      const mockStore = {
        animals: mockAnimalsArray
      };
      const result = mapStateToProps(mockStore);

      expect(result.animals).toEqual(mockStore.animals);
    });

    it('Should pull continents from the store', () => {
      const mockStore = {
        continents: mockContinentsArray
      };
      const result = mapStateToProps(mockStore);

      expect(result.continents).toEqual(mockStore.continents);
    });

    it('Should pull filter from the store', () => {
      const mockStore = {
        filter: 'default'
      };
      const result = mapStateToProps(mockStore);

      expect(result.filter).toEqual(mockStore.filter);
    });
  });
});
