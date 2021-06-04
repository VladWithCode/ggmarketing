document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init();

  // Get the navbar
  let navbar = document.getElementById('navbar');

  // Get the offset position of the navbar
  let sticky = navbar.offsetHeight;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  window.onscroll = function () {
    myFunction();
  };

  if (location.pathname !== '/') return;

  const optionsContainer = document.getElementById('options');
  const optionElements = document.querySelectorAll('.option');
  const optionCount = optionElements.length;

  setTimeout(() => optionElements[0].classList.add('optionActive'), 250);

  setInterval(
    switchHeroText(optionsContainer, optionElements, optionCount),
    3500
  );
});

function switchHeroText(container, elements, count) {
  return function () {
    let currentIndex = +container.dataset.current;
    let nextIndex = currentIndex + 1;

    elements[currentIndex % count].classList.remove('optionActive');
    elements[nextIndex % count].classList.add('optionActive');

    if (nextIndex >= count) nextIndex = 0;
    container.dataset.current = nextIndex;
  };
}
