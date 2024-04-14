import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const according = document.querySelector('.list-about-me');

new Accordion(according, {
    openOnInit:[0],
    collapse: false,
});


import { initSwiper } from './api.js';
const swiperAboutMe = document.querySelector("#carousel-about-me-list");
const SAM = initSwiper(swiperAboutMe, 'horizontal', true);

// new Swiper(swiperAboutMe);

