import setStickyProperties from './setStickyProperties';

document.addEventListener = jest.fn().mockImplementation();
document.querySelectorAll = jest.fn().mockImplementation(() => {
  return {
    NodeList: {
      Sticky: {
        attributes: {
          'data-sticky': true
        }
      }
    }
  };
});

describe('setStickyProperties tests', () => {
  it('Should be a function', () => {
    expect(setStickyProperties).toBeAFunction;
  });

  it('Should gather all sticky elements', () => {
    setStickyProperties();

    expect(document.querySelectorAll).toHaveBeenCalledWith('[data-sticky]');
  });

  it('Should add an event listener to the document', () => {
    setStickyProperties();

    expect(document.addEventListener).toHaveBeenCalled();
  });
});
