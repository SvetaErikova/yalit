const showMoreButtons = document.querySelectorAll('.js-show-content');

function setButtonLabel(button) {
  const label = button.querySelector('span');
  if (!label) return;

  const isOpen = button.classList.contains('active');
  const text = isOpen ? button.dataset.collapse : button.dataset.expand;
  if (text) label.textContent = text;
}

showMoreButtons.forEach((button) => {
  setButtonLabel(button);

  button.addEventListener('click', () => {
    const content = button.previousElementSibling;
    if (!content) return;

    content.classList.toggle('active');
    button.classList.toggle('active');
    setButtonLabel(button);
  });
});
