const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');

openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'open';
  document.body.style.overflow = 'hidden';
});

closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
  document.body.style.overflow = '';
});

burgerMenuEl.addEventListener('click', ev => {
  const nav = ev.target.closest('[data-nav]');
  if (nav) {
    burgerMenuEl.dataset.visible = 'close';
    document.body.style.overflow = '';
  }
});
