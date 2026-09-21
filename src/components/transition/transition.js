const TRANSITION_DURATION = 1000;

function navigateTo(url) {
  const overlay = document.querySelector('.transition-overlay');
  overlay.classList.add('active');
  setTimeout(() => {
    window.location.href = url;
  }, TRANSITION_DURATION);
  return false;
}

window.addEventListener('pageshow', function(event) {
  if (!event.persisted) return;

  const overlay = document.querySelector('.transition-overlay');
  overlay.classList.remove('active');
  overlay.classList.add('reverse');
  setTimeout(() => {
    overlay.classList.remove('reverse');
    overlay.classList.remove('active');
  }, TRANSITION_DURATION);
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href ||
      href==='' ||
      href=== undefined ||
      href=== null ||
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      href.startsWith('javascript:') ||
      link.getAttribute('target') === '_blank' ||
      link.hasAttribute('data-notransition') ||
      link.hasAttribute('data-fancybox')) {
      return;
    }

    link.addEventListener('click', function(e) {
      e.preventDefault();
      navigateTo(href);
    });
  });
});
