import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const according = document.querySelector('.list-about-me');

new Accordion(according, {
    openOnInit:[0],
    collapse: false,
});

import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';

const swiperAboutMe = document.querySelector("#carousel-about-me-list");

const buttonEl = document.querySelector('.swiper-button-next');

const swiper = new Swiper(swiperAboutMe, {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  spaceBetween: 0,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  initialSlide: 1,
  updateOnWindowResize: true,
    breakpoints: {
        319: {
        slidesPerView:2,
    },
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




