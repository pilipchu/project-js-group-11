
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper'
import 'swiper/css'
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules'

// ---------Accordion-------

const according = document.querySelector('.list-about-me');

new Accordion(according, {
    showMultiple: true,
    openOnInit: [0], 
});


// ---------Accordion-------
// ---------Swiper---------
const swiperAboutMeContainer = document.querySelector('#carousel-about-me-list');
const buttonNextAM = document.querySelector('.btn-next-a-m');

buttonNextAM.addEventListener("click", () => swiperAboutMe.slideNext());

const swiperAboutMe = new Swiper(swiperAboutMeContainer, {
  modules: [Navigation, Keyboard, Mousewheel],
  direction: 'horizontal',
  spaceBetween: 0,
  navigation: {
      nextEl: buttonNextAM,
    //   prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
    initialSlide: 1,
  updateOnWindowResize: true,
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











