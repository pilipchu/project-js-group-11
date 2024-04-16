// запит на сервер щоб отримати review

import axios from 'axios';
import Swiper from 'swiper';

export async function getReviews() {
  const URL = 'https://portfolio-js.b.goit.study/api/reviews';

  const RESPONSE = await axios.get(URL);

  if (RESPONSE.status !== 200) {
    throw new Error('Network response was not ok');
  }

  const DATA = RESPONSE.data;

  return DATA;
}

//getReviews()

// =========================
// тут метод POST

export async function postReview(email, comment) {
  const POST_URL = 'https://portfolio-js.b.goit.study/api/requests';

  const POST_RESPONSE = await axios.post(POST_URL, {
    email: email,
    comment: comment,
  });

  const RESPONSE_DATA = POST_RESPONSE.data;
  // console.log(RESPONSE_DATA); // теж розкоментуйте якщо треба глянути, що приходить
  return RESPONSE_DATA;
}

// накидаю приклад для перевірки роботи, бо в мене все норм. Якщо треба буде зробити перевірку - розкоментуйте два консти нижче)
//const email = "its-work@gmail.com";
//const comment = "Все працює. Всі молодці";

// postReview(email, comment)
//   .catch(error => {
//     console.error(error);
//   });

// ===================================================
// SWIPER

export function initSwiper(containerId, direction, loop = false) {
  return new Swiper(containerId, {
    direction: direction,
    loop: loop,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: true,
  });
}

// інструкція:
// спочатку імпортуємо ф-цію в свій файл

// import { initSwiper } from './swiperUtils.js';

// ПОТІМ

// додаємо таку штуку щоб ініціалізувати його у себе

// const PROJECTS_SWIPER = initSwiper('#ВАШ-АЙДІШНІК-ЯКИЙ-СТОЇТЬ-НА-ДІВІ', 'horizontal', true);

// наприклад якщо це секція
// reviews.js

// const REVIEWS_SWIPER = initSwiper('#reviews-swiper', 'horizontal', true);

// якось так має працювати.. з божою допомогою))))
// =================================

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function createAccordion(defaultOpenIndex = 0) {
  //  я шукаю контейнер акордиону по класу! Гляньте щоб у вас клас основний був .accordion-container,
  //  а вже для індивідуальних стилів можете накинути ще один свій
  const CONTAINER = document.querySelector('.accordion-container');

  //  на всякий випадок
  if (!CONTAINER) {
    console.error('Container not found');
    return;
  }

  const ITEMS = CONTAINER.querySelectorAll('li');
  new Accordion(CONTAINER, {});

  ITEMS.forEach((item, index) => {
    if (index === defaultOpenIndex) {
      item.classList.add('active');
    }
  });
}

//  тепер треба зробити імпорт тепер треба зробити імпорт до себе і викликати функцію
// тільки в секції about me треба передати в параметр 0, щоб перший елемент був відкритий.
//  в іншій секції просто виклик функції і в дужках нічого не треба бо по замовчуванню 1й елемент закритий
// Приклад:

// import { createAccordion } from "./api";

// createAccordion(0);
// або
// createAccordion();
