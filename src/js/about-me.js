
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
// ---------Accordion-------

const according = document.querySelector('.list-about-me');

new Accordion(according, {
    showMultiple: true,
    openOnInit: [0], 
});

const buttons = accContainer.querySelectorAll('.ac-trigger');
[...buttons].map((button, idx) => {
    button.addEventListener('click', () => accordion.close(idx));
});

// ---------Accordion-------
// ---------Swiper---------



// const swiperAboutMe = document.querySelector("#carousel-about-me-list");

// const buttonEl = document.querySelector('.swiper-button-next');

// const swiper = new Swiper(swiperAboutMe, {
//   modules: [Navigation, Keyboard, Mousewheel],
//   direction: 'horizontal',
//   spaceBetween: 0,
//   navigation: {
//       nextEl: buttonEl,
//       prevEl: '.swiper-button-prev',
//   },
//   slidesPerView: 2,
//   initialSlide: 1,
//   updateOnWindowResize: true,
//     breakpoints: {
//     375: {
//         slidesPerView: 3,
//     },
//     767: {
//       slidesPerView: 3,
//     },
//     1440: {
//       slidesPerView: 5,
//     },
//   },
//   mousewheel: {
//     enabled: true,
//     invert: true,
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   loop: true,
//   allowTouchMove: true,
//   followFinger: true,
//   simulateTouch: true,
// });

const swiperEl = document.querySelector('#carousel-about-me-list');
const buttonEl = document.querySelector('.swiper-button-next');
const swiperBySection = new Swiper(swiperEl, {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  spaceBetween: 0,
  navigation: {
    nextEl: buttonEl,
  },
  slidesPerView: 2,
  initialSlide: 1,
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  mousewheel: {
    enabled: true,
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  loop: true,
  allowTouchMove: true,
  followFinger: true,
  simulateTouch: true,
});


