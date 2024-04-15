document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu-button');
  const menuList = document.getElementById('menu-list');

  let isOpen = false; 

  menuButton.addEventListener('click', function() {
    if (!isOpen) {
 
      menuList.style.display = 'flex';
      const links = menuList.querySelectorAll('li');
      links.forEach((link, index) => {
        setTimeout(() => {
          link.style.transition = 'opacity 0.3s, transform 0.3s';
          link.style.opacity = '1';
          link.style.transform = 'translateY(0)';
        }, index * 250);
      });
      isOpen = true;
    } else {
    
      const links = menuList.querySelectorAll('li');
      links.forEach((link, index) => {
        link.style.transition = `opacity 0.3s ${(links.length - index - 1) * 250}ms, transform 0.3s ${(links.length - index - 1) * 250}ms`;
        link.style.opacity = '0';
        link.style.transform = 'translateY(-100%)';
      });
      setTimeout(() => {
        menuList.style.display = 'none';
      }, links.length * 250);
      isOpen = false;
    }
  });
});



