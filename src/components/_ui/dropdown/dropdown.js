const mobileQuery = window.matchMedia('(max-width: 768px)');

const closeDropdowns = () => {
  document.querySelectorAll('.dropdown.is_active').forEach((item) => {
    item.classList.remove('is_active');
  });
};

document.addEventListener('click', (event) => {
  if (!mobileQuery.matches) return;

  const dropdown = event.target.closest('.dropdown');

  if (!dropdown) {
    closeDropdowns();
    return;
  }

  if (event.target.closest('.dropdown--content')) {
    closeDropdowns();
    return;
  }

  event.preventDefault();

  const willOpen = !dropdown.classList.contains('is_active');
  closeDropdowns();
  if (willOpen) dropdown.classList.add('is_active');
});

mobileQuery.addEventListener('change', (event) => {
  if (!event.matches) closeDropdowns();
});

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll >= lastScroll && currentScroll > 60) {
    closeDropdowns();
  }

  lastScroll = currentScroll;
});
