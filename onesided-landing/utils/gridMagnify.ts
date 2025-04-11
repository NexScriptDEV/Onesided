/**
 * Grid magnification effect has been removed as requested
 */

/**
 * Initialize scroll reveal animations
 * Adds 'active' class to elements with reveal classes when they enter the viewport
 */
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-up, .reveal-left, .reveal-right'
  );

  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150; // How many pixels from the bottom of the viewport to start revealing

      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      } else {
        revealElements[i].classList.remove('active');
      }
    }
  };

  window.addEventListener('scroll', revealOnScroll);

  // Initial check
  revealOnScroll();
};
