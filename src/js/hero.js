// Отримуємо елементи DOM
const heroSection = document.querySelector('.hero-section');
const backHero = document.querySelector('.back-hero');

// Функція для перевірки ширини екрану та зміни фонового зображення
function toggleBackgroundImage() {
  if (window.innerWidth >= 1440) {
    // Приховуємо фонове зображення на секції
    heroSection.style.backgroundImage = 'none';
    // Відображаємо фото з контейнера back-hero
    backHero.style.display = 'block';
  } else {
    // Відображаємо фонове зображення на секції
    heroSection.style.backgroundImage = 'url(../img/hero/Hero-desc.png)';
    // Приховуємо фото з контейнера back-hero
    backHero.style.display = 'none';
  }
}

// Викликаємо функцію одразу при завантаженні сторінки
toggleBackgroundImage();

// Викликаємо функцію при зміні розміру вікна
window.addEventListener('resize', toggleBackgroundImage);
