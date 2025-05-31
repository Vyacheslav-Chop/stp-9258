function smoothScroll(ev) {
  ev.preventDefault();
  const id = ev.currentTarget.getAttribute('href');
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  ev.currentTarget.blur();
}

function scrollToView() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
}

scrollToView();
