import 'swiper/swiper-bundle.css';
import Swiper from "swiper";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { Navigation, Keyboard, Mousewheel } from 'swiper';

import { apiGet } from './api';

const notFoundMessage = document.querySelector('.not-found');
const reviewsList = document.querySelector(`.reviews-list`);
const swiperBlock = document.querySelector(`.swiper-cont`);

function displayToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}

async function getReviews() {
  try {
    const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews");

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    const data = response.data;

    return data;
  } catch(error) {
    console.error('Problem fetching the data:', error);
    throw error;
  }
}

async function renderReviews() {
  try {
    const reviews = await getReviews();
    if (reviews && reviews.length > 0) {
      render(reviews);
    } else {
      reviewsIsNotFounded();
    }
  } catch(error) {
    console.error('Problem rendering reviews:', error);
    reviewsIsNotFounded();
  }
}

function render(reviews) {
  if (reviews.length === 0) {
    reviewsIsNotFounded();
  } else {
    const markup = reviews.map(review => `<li class="reviews-item swiper-slide">
                <img src="${review.avatar_url}" alt="" width="48" height="48"  class="reviews-avatar"/>
                <div class="reviews-text">
                    <h3 class="reviews-name">${review.author}</h3>
                    <p class="reviews-p">${review.review}</p>
                </div>
              </li>`)
      .join('');
    reviewsList.insertAdjacentHTML('beforeend', markup);
    initializeSwiper();
  }
}

function reviewsIsNotFounded() {
  swiperBlock.style.display = 'none';
  notFoundMessage.style.display = 'block';
  displayToast(`The connection with the server has problem, so reviews are not rendered`)
}

function initializeSwiper() {
  const swiperReviews = new Swiper('.swiper-cont', {
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: { enabled: true },
    speed: 800,
    spaceBetween: 16,
    allowTouchMove: true,
    loop: false,
    watchOverflow: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

document.addEventListener('DOMContentLoaded', renderReviews);
