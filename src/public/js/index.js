document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init();

  // Get the navbar
  let navbar = document.getElementById("navbar");

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

  window.onscroll = function () { myFunction() };

  const optionsContainer = document.getElementById('options');
  const optionElements = document.querySelectorAll('.option');
  const optionCount = optionElements.length;

  setInterval(function () {
    let currentIndex = +optionsContainer.dataset.current;
    let nextIndex = currentIndex + 1;
    
    optionElements[currentIndex % optionCount].classList.remove("optionActive");
    optionElements[nextIndex % optionCount].classList.add("optionActive");

    /* for (let option of optionsContainer.children) {
      if (localIndex === currentIndex) {
        option.classList.add('optionActive');
        localIndex++;
        continue;
      }
      localIndex++;
      option.classList.remove('optionActive');
      continue;
    } */

    /* if (nextIndex === optionCount) {
      return optionsContainer.dataset.current = 0;
    } */
    if (nextIndex >= optionCount) nextIndex = 0;
    optionsContainer.dataset.current = nextIndex;
  }, 2000);
});

// optionsChildren[0].classList.add('optionActive');

/* function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} */

/* let last = 0;
let firstRun = true

const changeOption = async () => {
  current = 0;

  if(firstRun){
    setInterval(changeOption, 10540);
    firstRun = false;
  }

  optionsChildren[last].classList.remove('optionActive');
  optionsChildren[current].classList.add('optionActive');
  await sleep(3500);

  optionsChildren[current].classList.remove('optionActive');
  current++;
  optionsChildren[current].classList.add('optionActive');
  await sleep(3500);

  optionsChildren[current].classList.remove('optionActive');
  current++;
  optionsChildren[current].classList.add('optionActive');

  await sleep(3500);
  last = current;
}

changeOption(); */
