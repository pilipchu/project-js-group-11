const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
           return '<span class="' + className + '">' + (index + 1) + "</span>";
         }
  },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const nextBtn = document.querySelector(".swiper-button-next");
nextBtn.addEventListener("click", () => swiper.slideNext());

