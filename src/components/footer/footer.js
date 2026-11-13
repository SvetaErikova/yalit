const copyrightYear = document.getElementById('js-current_year');

if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}

const footer = document.querySelector('.footer');

