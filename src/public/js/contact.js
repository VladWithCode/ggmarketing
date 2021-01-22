document.addEventListener('DOMContentLoaded', async () => {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(e) {
    fbq('track', 'Contact');
  })
});
