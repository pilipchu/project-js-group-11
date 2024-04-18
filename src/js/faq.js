const FAQS = document.querySelectorAll('.faq-item');

FAQS.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
