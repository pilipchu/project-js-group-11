
(() => {
  const MOBILE_MENU = document.querySelector('.js-menu-container');
  const OPEN_MENU_BTN = document.querySelector('.js-open-menu');
  const CLOSE_MENU_BTN = document.querySelector('.js-close-menu');
  const CLOSE_MENU_LINK = document.querySelectorAll('.header-link');
  const ORDER_BTN = document.querySelector('.js-order-btn');

  const TOGGLE_MENU = () => {
    const IS_MENU_OPEN =
      OPEN_MENU_BTN.getAttribute('aria-expanded') === 'true' || false;
    OPEN_MENU_BTN.setAttribute('aria-expanded', !IS_MENU_OPEN);
        MOBILE_MENU.classList.toggle('is-open');
      const SCROLL_LOCK_METHOD = !IS_MENU_OPEN
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[SCROLL_LOCK_METHOD](document.body);
  };
  CLOSE_MENU_LINK.forEach(item => item.addEventListener('click', TOGGLE_MENU));
  OPEN_MENU_BTN.addEventListener('click', TOGGLE_MENU);
  CLOSE_MENU_BTN.addEventListener('click', TOGGLE_MENU);
  ORDER_BTN.addEventListener('click', TOGGLE_MENU);

 
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    MOBILE_MENU.classList.remove('is-open');
    OPEN_MENU_BTN.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();