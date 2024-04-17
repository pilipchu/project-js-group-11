
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const closeMenuLink = document.querySelectorAll('.header-link');
  const orderBtn = document.querySelector('.js-order-btn');

  const menuLinks = document.querySelectorAll('.header-link');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    if (!isMenuOpen) {
  
      mobileMenu.classList.add('is-open');
      
      document.body.style.overflow = 'hidden';
    } else {
     
      mobileMenu.classList.remove('is-open');
     
     document.body.style.overflow = '';
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  orderBtn.addEventListener('click', toggleMenu);

 
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

  menuLinks.forEach(link => link.addEventListener('click', toggleMenu));
})();

