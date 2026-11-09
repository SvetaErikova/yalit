const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';
const REVEAL_CLASS = 'is-revealed';

function reveal(nodes) {
  nodes.forEach((el) => el.classList.add(REVEAL_CLASS));
}

function initReveal() {
  const headParts = document.querySelectorAll(
    '.block--head_title, .block--head_subtitle, .block--head_caption, .block--head .block--actions',
  );
  const cards = document.querySelectorAll('.block_list .card');
  const accordions = document.querySelectorAll('.accordion');
  const galleries = document.querySelectorAll('.content_galleries .gallery--item')
  const galleriesTitle = document.querySelectorAll('.content_galleries .block--group_title')

  const reduced = window.matchMedia(REDUCED_QUERY).matches;
  const nodes = [...headParts, ...cards, ...accordions, ...galleries, ...galleriesTitle];

  if (reduced || !('IntersectionObserver' in window)) {
    reveal(nodes);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(REVEAL_CLASS);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
  );

  nodes.forEach((el) => io.observe(el));
}

function initAnimate() {
  initReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimate, { once: true });
} else {
  initAnimate();
}
