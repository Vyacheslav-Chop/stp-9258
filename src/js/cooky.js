const STORAGE_KEYS = {
  cookiesModalShown: 'cookiesModalShown',
  userChoice: 'cookiesUserChoice',
};

const isOPenMOdal = localStorage.getItem(STORAGE_KEYS.cookiesModalShown);

const backdropModal = document.querySelector('[data-modal]');
const buttonsWrap = document.querySelector('[data-buttons]');

if (!isOPenMOdal) {
  openModal();
}

buttonsWrap.addEventListener('click', ev => {
  const button = ev.target.closest('[data-cooky-button]');

  if (!button) return;

  localStorage.setItem(STORAGE_KEYS.cookiesModalShown, 'true');
  closeModal();
});

function closeModal() {
  backdropModal.dataset.modal = 'hidden';
  document.body.style.overflow = '';
  document.body.style.pointerEvents = 'auto';
}

function openModal() {
  backdropModal.dataset.modal = 'shown';
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none';
}
