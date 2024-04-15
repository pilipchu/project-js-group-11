const form = document.getElementById('work-together-form');
const emailInput = document.getElementById('work-together-input-email');
const commentInput = document.getElementById('work-together-input-text');
const successMessage = document.getElementById('success-message');
const invalidMessage = document.getElementById('invalid-message');
const sendButton = document.querySelector('.work-together-btn');
const popup = document.getElementById('work-together-popup');
const closeModalButton = document.querySelector(
  '.work-together-modal-close-btn'
);

import { postReview } from '../js/api.js';

// !==================== ОБРІЗКА ТЕКСТУ (//обрізає на половині і не дає можливості видалити, тільки перезапуск сторінки)
let maxLength =
  Math.floor(
    commentInput.clientWidth /
      parseFloat(window.getComputedStyle(commentInput).fontSize)
  ) - 1;
commentInput.addEventListener('input', function () {
  const currentLength = commentInput.value.length;

  if (currentLength > maxLength) {
    const truncatedText = commentInput.value.slice(0, maxLength);
    const displayText = truncatedText + '...';
    commentInput.value = displayText;
  } else {
    maxLength =
      Math.floor(
        commentInput.clientWidth /
          parseFloat(window.getComputedStyle(commentInput).fontSize)
      ) - 1;
  }
});

// !==================== Перевірка пошти, повертає true або false
function validateEmail(email) {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailPattern.test(email);
}

// !==================== Post запит
async function sendRequest(email, comment) {
  try {
    const response = await postReview(email, comment);
    // console.log(response);
    if (response.success) {
      popup.classList.add('open');
      emailInput.value = '';
      commentInput.value = '';
    } else {
      alert('There was an error. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// !==================== Сплиття підсказки
sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const comment = commentInput.value;
  if (!validateEmail(email)) {
    invalidMessage.style.display = 'block';
    successMessage.style.display = 'none';
    emailInput.classList.remove('success');
    emailInput.classList.add('remove');
    emailInput.focus();
    return;
  }
  emailInput.classList.remove('remove');
  emailInput.classList.add('success');
  successMessage.style.display = 'block';
  invalidMessage.style.display = 'none';
  sendRequest(email, comment);
});

// !==================== Закриття модального вікна
closeModalButton.addEventListener('click', function () {
  closePopup();
});

popup.addEventListener('click', function (event) {
  if (event.target === popup) {
    closePopup();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closePopup();
  }
});

function closePopup() {
  popup.classList.remove('open');
  invalidMessage.style.display = 'none';
  successMessage.style.display = 'none';
  emailInput.classList.remove('remove', 'success');
  emailInput.value = '';
  commentInput.value = '';
}

//! ======================= Відкриття модального вікна за кліком, в коді не потрібен, для перевірки
// sendButton.addEventListener('click', function (e) {
//   popup.classList.add('open');
// });
