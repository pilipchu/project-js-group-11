const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
