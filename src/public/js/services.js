document.addEventListener('DOMContentLoaded', () => {
  const ctaBtns = document.querySelectorAll('.cta');

  ctaBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      const planName = btn.dataset['planName'];
      location.assign('/contratar/' + planName);
    });
  });
})
