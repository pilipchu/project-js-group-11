document.addEventListener('DOMContentLoaded', function() {
  const MENU_BUTTON = document.getElementById('menu-button');
  const MENU_LIST = document.getElementById('menu-list');

  let isOpen = false; 

  MENU_BUTTON.addEventListener('click', function() {
    if (!isOpen) {
      MENU_LIST.classList.remove('menu-list-hidden');
      MENU_LIST.classList.add('menu-list-visible');

      const LINKS = MENU_LIST.querySelectorAll('a');
      LINKS.forEach((link, index) => {
        link.classList.remove('menu-link-hidden');
        link.classList.add('menu-link-visible');
        link.style.transition = `opacity 0.4s ${(index) * 250}ms, transform 0.4s ${(index) * 250}ms`;
      });
      setTimeout(() => {
        MENU_LIST.classList.remove('menu-list-hidden');
        MENU_LIST.classList.add('menu-list-visible');
      }, LINKS.length * 250);
      isOpen = true;
      
    } else {
      const LINKS = MENU_LIST.querySelectorAll('a');
      LINKS.forEach((link, index) => {
        link.classList.remove('menu-link-visible');
        link.classList.add('menu-link-hidden');
        link.style.transition = `opacity 0.3s ${(LINKS.length - index - 1) * 250}ms, transform 0.3s ${(LINKS.length - index - 1) * 250}ms`;
      });
      setTimeout(() => {
        MENU_LIST.classList.remove('menu-list-visible');
        MENU_LIST.classList.add('menu-list-hidden');

      }, LINKS.length * 250);
      isOpen = false;
    }
  });
});
