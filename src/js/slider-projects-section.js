import Swiper from 'swiper'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

// import { initSwiper } from './api'

// const projectsSwiper = initSwiper('#proj-swiper', 'horizontal', true);

const swipeForwardBtn = document.querySelector(".swipe-forward-btn")
const swipeBackBtn = document.querySelector(".swipe-back-btn")

const swiper = new Swiper('#proj-swiper', {
    speed: 400,
    direction: 'horizontal',
    loop: false,
    navigation: {
    nextEl: swipeForwardBtn,
    prevEl: swipeBackBtn,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
    invert: true,
  },
  allowTouchMove: true,
  followFinger: true,
  simulateTouch: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  modules: [ Navigation],
 
});

