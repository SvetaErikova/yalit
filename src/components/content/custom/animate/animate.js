const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';
const REVEAL_CLASS = 'is-revealed';
const STAGGER_MS = 80;

function setCardDelays(list) {
  list.querySelectorAll('.card').forEach((card, index) => {
    card.style.setProperty('--reveal-delay', `${(index % 4) * STAGGER_MS}ms`);
  });
}

function reveal(nodes) {
  nodes.forEach((el) => el.classList.add(REVEAL_CLASS));
}

function initReveal() {
  const headParts = document.querySelectorAll(
    '.block--head_title, .block--head_subtitle, .block--head_caption, .block--head .block--actions',
  );
  const lists = document.querySelectorAll('.block_list');
  const cards = document.querySelectorAll('.block_list .card');

  lists.forEach(setCardDelays);

  const reduced = window.matchMedia(REDUCED_QUERY).matches;
  const nodes = [...headParts, ...cards];

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

function initBannerParallax() {
  if (window.matchMedia(REDUCED_QUERY).matches) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.block_banner').forEach((block) => {
    const media = block.querySelectorAll('.banner .block--content img, .banner .block--content video');
    if (!media.length) return;

    gsap.fromTo(media, {
      yPercent: -10,
      scale: 1.25,
    }, {
      yPercent: 10,
      scale: 1.25,
      ease: 'none',
      scrollTrigger: {
        trigger: block,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}

function initAnimate() {
  initReveal();
  initBannerParallax();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimate, { once: true });
} else {
  initAnimate();
}
