// запит на сервер щоб отримати review

import axios from "axios";
import Swiper from "swiper";

export async function getReviews() {
  const url = "https://portfolio-js.b.goit.study/api/reviews";

    const response = await axios.get (url);

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    const data = response.data;

    return data;
}

//getReviews()

// =========================
// тут метод POST

export async function postReview(email, comment) {
  const postUrl = "https://portfolio-js.b.goit.study/api/requests";

    const response = await axios.post(postUrl, {
      email: email,
      comment: comment
    });

    const responseData = response.data;
    // console.log(responseData); // теж розкоментуйте якщо треба глянути, що приходить
    return responseData;

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

// const projectsSwiper = initSwiper('#ВАШ-АЙДІШНІК-ЯКИЙ-СТОЇТЬ-НА-ДІВІ', 'horizontal', true);

// наприклад якщо це секція
// reviews.js

// const reviewsSwiper = initSwiper('#reviews-swiper', 'horizontal', true);

// якось так має працювати.. з божою допомогою))))
// =================================


import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function createAccordion(defaultOpenIndex = 0) {

  //  я шукаю контейнер акордиону по класу! Гляньте щоб у вас клас основний був .accordion-container,
  //  а вже для індивідуальних стилів можете накинути ще один свій
  const container = document.querySelector(".accordion-container");

//  на всякий випадок
  if (!container) {
    console.error("Container not found");
    return;
  }

const items = container.querySelectorAll("li");
new Accordion(container, {});

  items.forEach((item, index) => {
    if (index === defaultOpenIndex) {
      item.classList.add("active");
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




