document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu-button');
  const menuList = document.getElementById('menu-list');

  let isOpen = false; 

  menuButton.addEventListener('click', function() {
    if (!isOpen) {
      menuList.classList.remove('menu-list-hidden');
      menuList.classList.add('menu-list-visible');

      const links = menuList.querySelectorAll('a');
      links.forEach((link, index) => {
        link.classList.remove('menu-link-hidden');
        link.classList.add('menu-link-visible');
        link.style.transition = `opacity 0.4s ${(index) * 250}ms, transform 0.4s ${(index) * 250}ms`;
      });
      setTimeout(() => {
        menuList.classList.remove('menu-list-hidden');
        menuList.classList.add('menu-list-visible');
      }, links.length * 250);
      isOpen = true;
      
    } else {
      const links = menuList.querySelectorAll('a');
      links.forEach((link, index) => {
        link.classList.remove('menu-link-visible');
        link.classList.add('menu-link-hidden');
        link.style.transition = `opacity 0.3s ${(links.length - index - 1) * 250}ms, transform 0.3s ${(links.length - index - 1) * 250}ms`;
      });
      setTimeout(() => {
        menuList.classList.remove('menu-list-visible');
        menuList.classList.add('menu-list-hidden');

      }, links.length * 250);
      isOpen = false;
    }
  });
});
