const modeButtons = document.querySelectorAll('.js-mode-toggle');

if (modeButtons.length > 0) {
  const syncButtonState = (button) => {
    const bodyClass = button.dataset.bodyClass;

    if (!bodyClass) {
      return;
    }

    button.classList.toggle('is_active', document.body.classList.contains(bodyClass));
  };

  modeButtons.forEach((button) => {
    syncButtonState(button);

    button.addEventListener('click', () => {
      const bodyClass = button.dataset.bodyClass;

      if (!bodyClass) {
        return;
      }

      document.body.classList.toggle(bodyClass);
      syncButtonState(button);
    });
  });
}
