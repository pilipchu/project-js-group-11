// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// const accordion = document.querySelector('.faq-list');

// new Accordion(accordion);

const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
