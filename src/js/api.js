// запит на сервер щоб отримати review

import axios from "axios";

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

getReviews();

// =========================


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
// const email = "its-work@gmail.com";
// const comment = "Все працює. Всі молодці";

postReview(email, comment)
  .catch(error => {
    console.error(error);
  });
