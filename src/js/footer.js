const form = document.getElementById('work-together-form');
const emailInput = document.getElementById('work-together-input-email');
const successMessage = document.getElementById('success-message');
const invalidMessage = document.getElementById('invalid-message');
const popup = document.querySelector('.work-together-popup');
const sendButton = document.querySelector('.work-together-btn');
const closeModalButton = document.querySelector(
  '.work-together-modal-close-btn'
);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (emailPattern.test(emailInput.value)) {
    // console.log(emailInput.value);
    emailInput.classList.remove('remove');
    emailInput.classList.add('success');
    successMessage.style.display = 'block';
    invalidMessage.style.display = 'none';
    popup.style.display = 'block';
  } else {
    emailInput.classList.remove('success');
    emailInput.classList.add('remove');
    invalidMessage.style.display = 'block';
    successMessage.style.display = 'none';
  }
});

emailInput.addEventListener('input', function () {
  emailInput.classList.remove('success', 'remove');
  successMessage.style.display = 'none';
  invalidMessage.style.display = 'none';
});

sendButton.addEventListener('click', async function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const comment = document.getElementById('work-together-input-text').value;

  try {
    const response = await postReview(email, comment);
    if (response.success) {
      popup.style.display = 'block';

      emailInput.value = '';
      document.getElementById('work-together-input-text').value = '';
    } else {
      alert('There was an error. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error. Please try again later.');
  }
});
