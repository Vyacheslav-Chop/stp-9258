const accordionButtons = document.querySelectorAll('[data-accordion-button]');

accordionButtons.forEach(button =>
  button.addEventListener('click', () => {
    const item = button.closest('[data-accordion-item]');
    const content = item.querySelector('[data-visible]');
    const icon = button.querySelector('[data-accordion-icon]');

    const isVisible = content.dataset.visible === 'shown';

    if (isVisible) {
      button.closest('[data-accordion-button]').blur();
      content.dataset.visible = 'hidden';
      icon.removeAttribute('data-icon');
      return;
    }

    const accordionContents = document.querySelectorAll('[data-visible]');

    const accordionIcons = document.querySelectorAll('[data-accordion-icon]');

    accordionContents.forEach(content => {
      content.dataset.visible = 'hidden';
    });

    accordionIcons.forEach(icon => {
      icon.removeAttribute('data-icon');
    });

    content.dataset.visible = 'shown';
    icon.dataset.icon = 'rotated';
  })
);
