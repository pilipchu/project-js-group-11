import Swiper from 'swiper'
import 'swiper/css'
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'

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
  simulateTouch: true,
  followFinger: true,
  allowTouchMove: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  modules: [Navigation, Keyboard, Mousewheel],
});

const swipeForwardIcon = document.querySelector(".arrow-forward-icon")
const swipeBackIcon = document.querySelector(".arrow-back-icon")

swiper.on('reachEnd', function () {
  swipeForwardIcon.classList.toggle("disabled-swipe")
  swipeForwardBtn.classList.toggle("disabled-swipe")
})

swiper.on('reachBeginning', function () {
  swipeBackIcon.classList.toggle("disabled-swipe")
  swipeBackBtn.classList.toggle("disabled-swipe")
})

swiper.on('fromEdge', function () {
  swipeBackIcon.classList.remove("disabled-swipe")
  swipeBackBtn.classList.remove("disabled-swipe")
  swipeForwardIcon.classList.remove("disabled-swipe")
  swipeForwardBtn.classList.remove("disabled-swipe")
})
