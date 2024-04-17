import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';
import { postReview } from '../js/api.js';

const form = document.getElementById('work-together-form');
const emailInput = document.getElementById('work-together-input-email');
const commentInput = document.getElementById('work-together-input-text');
const successMessage = document.getElementById('success-message');
const invalidMessage = document.getElementById('invalid-message');
const popup = document.getElementById('work-together-popup');
const closeModalButton = document.querySelector(
  '.work-together-modal-close-btn'
);
const sendButton = document.querySelector('.work-together-btn');

//  ======================= Відстежування input

// form.addEventListener('input', function (e) {
//   const email = emailInput.value;
//   const comment = commentInput.value;
//   if (!validateEmail(email)) {
//     showInvalidEmailMessage();
//     emailInput.focus();
//   } else {
//     showSuccessMessage();
//   }
// });

//  ======================= Відправка форми
sendButton.addEventListener('click', function (e) {
  e.preventDefault();

  const email = emailInput.value;
  const comment = commentInput.value;

  if (!email || !comment) {
    iziToast.error({
      message: 'Please fill in all fields',
      position: 'topRight',
    });
    // alert('Please fill in all fields');
    return;
  }

  if (!validateEmail(email)) {
    showInvalidEmailMessage();
    emailInput.focus();
    return;
  }
  sendRequest(email, comment);
});

//  ==================== Перевірка пошти, повертає true або false
function validateEmail(email) {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailPattern.test(email);
}

//  ==================== Post запит
async function sendRequest(email, comment) {
  try {
    const response = await postReview(email, comment);
    if (response) {
      showSuccessMessage();
      popup.classList.add('open');
      emailInput.value = '';
      commentInput.value = '';
    } else {
      iziToast.error({
        message: 'There was an error. Please try again later',
        position: 'topRight',
      });
      // alert('There was an error. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// ==================== Закриття модального вікна
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

// =======================  Невалідна електрона пошта
function showInvalidEmailMessage() {
  invalidMessage.style.display = 'block';
  successMessage.style.display = 'none';
  emailInput.classList.remove('success');
  emailInput.classList.add('remove');
}

// ======================== Валідна електрона пошта
function showSuccessMessage() {
  successMessage.style.display = 'block';
  invalidMessage.style.display = 'none';
  emailInput.classList.remove('remove');
  emailInput.classList.add('success');
}

// ==================== Обрізка тексту
//! обрізає на половині і не дає можливості видалити, тільки перезапуск сторінки
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
