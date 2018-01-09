const setStickyProperties = () => {
  const setInitialHeights = elements => {
    [].forEach.call(elements, sticky => {
      sticky.setAttribute(
        'data-sticky-initial',
        sticky.getBoundingClientRect().top
      );
    });
  };

  const stickies = document.querySelectorAll('[data-sticky]');
  setInitialHeights(stickies);

  document.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    const bottom =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    [].forEach.call(stickies, sticky => {
      const stickyInitial = parseInt(
        sticky.getAttribute('data-sticky-initial'),
        10
      );
      const stickyEnter =
        parseInt(sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
      const stickyExit =
        parseInt(sticky.getAttribute('data-sticky-exit'), 10) || bottom;

      if (top >= stickyEnter && top <= stickyExit) {
        sticky.classList.add('sticky');
      } else {
        sticky.classList.remove('sticky');
      }
    });
  });
};

export default setStickyProperties;
