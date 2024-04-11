// запит на сервер щоб отримати review

import axios from "axios";
import Swiper from "swiper";

 export async function getReviews() {
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

//getReviews()

// =========================
// тут метод POST

export async function postReview(email, comment) {
  try {
    const response = await axios.post("https://portfolio-js.b.goit.study/api/requests", {
      email: email,
      comment: comment
    });

    const responseData = response.data;
    // console.log(responseData); // теж розкоментуйте якщо треба глянути, що приходить
    return responseData;
  } catch(error) {
    console.error('Problem posting the review:', error);
    throw error;
  }
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
