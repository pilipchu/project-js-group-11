import Swiper from 'swiper';
import axios from "axios";
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import { getReviews } from './api';

document.addEventListener('DOMContentLoaded', renderReviews);

async function renderReviews() {
  try {
    const reviews = await getReviews();
    render(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

function render(reviews) {
  if (!Array.isArray(reviews)) {
    console.error('Received reviews data is not an array:', reviews);
    return;
  }

  const reviewsList = document.querySelector(`.reviews-list`);
  const markup = reviews.map(({ author, avatar_url, review }) => {
    return `<li class="reviews-item swiper-slide">
              <img src="${avatar_url}" alt="" width="48" height="48" class="reviews-img"/>
              <div class="reviews-text">
                  <h3 class="reviews-name">${author}</h3>
                  <p class="reviews-p">${review}</p>
              </div>
            </li>`;
  }).join('');
  reviewsList.insertAdjacentHTML('beforeend', markup);

  initializeSwiper('.swiper-cont');
}

function initializeSwiper(containerId) {
  const swiperReviews = new Swiper(containerId, {
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 1,
    breakpoints: {
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 }
    },
    keyboard: { enabled: true, onlyInViewport: true },
    mousewheel: { enabled: true },
    speed: 400,
    spaceBetween: 16,
    allowTouchMove: true,
    loop: false,
    watchOverflow: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.reviews-btn-next',
      prevEl: '.reviews-btn-prev'
    }
  });

  swiperReviews.on('reachEnd', function () {
    document.querySelector(".icon-arr").classList.add("reviews-disabled-swipe");
    document.querySelector(".reviews-btn-next").classList.add("reviews-disabled-swipe");
  });

  swiperReviews.on('reachBeginning', function () {
    document.querySelector(".icon-prev-arr").classList.add("reviews-disabled-swipe");
    document.querySelector(".reviews-btn-prev").classList.add("reviews-disabled-swipe");
  });

  swiperReviews.on('fromEdge', function () {
    document.querySelector(".icon-prev-arr").classList.remove("reviews-disabled-swipe");
    document.querySelector(".reviews-btn-prev").classList.remove("reviews-disabled-swipe");
    document.querySelector(".icon-arr").classList.remove("reviews-disabled-swipe");
    document.querySelector(".reviews-btn-next").classList.remove("reviews-disabled-swipe");
  });

  const nextBtn = document.querySelector(".reviews-btn-next");
  nextBtn.addEventListener("click", () => swiperReviews.slideNext());
}
