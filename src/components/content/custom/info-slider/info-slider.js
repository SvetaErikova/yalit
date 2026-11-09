const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';
const DUR_S = 0.4;
const DUR_M = 0.8;
const DUR_L = 1.2;
const STAGGER = 0.1;
const AUTO = 6;
const SHIFT = 48;
const EASE_OUT = 'power3.out';
const EASE_IN = 'power3.in';
const EASE_IN_OUT = 'power3.inOut';

const REVEAL_CLIP = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
const ENTER_CLIP = 'polygon(100% 0%, 100% 0%, 101% 100%, 125% 100%)';
const LEAVE_FROM_CLIP = 'polygon(0% 0%, 100% 0%, 125% 100%, 0% 100%)';
const LEAVE_TO_CLIP = 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';

function splitTitle(el) {
  if (el._split) return el._split;
  const shell = el.closest('.card--title');
  shell.style.visibility = 'visible';
  el._split = new SplitText(el, {
    type: 'words,chars',
    tag: 'span',
    wordsClass: 'split-word',
    charsClass: 'split-char',
  });
  el._split.chars.forEach((char) => {
    char.style.display = 'inline-block';
  });
  gsap.set(el._split.chars, { transformPerspective: 600, transformOrigin: 'center center' });
  shell.style.visibility = '';
  return el._split;
}

function splitText(el) {
  if (el._split) return el._split;
  const shell = el.closest('.card--copy');
  shell.style.visibility = 'visible';
  el._split = new SplitText(el, {
    type: 'lines,words',
    tag: 'span',
    linesClass: 'split-line',
    wordsClass: 'split-word',
  });
  el._split.lines.forEach((line) => {
    if (line.parentElement?.classList.contains('split-mask')) return;
    const mask = document.createElement('span');
    mask.className = 'split-mask';
    line.parentNode.insertBefore(mask, line);
    mask.appendChild(line);
  });
  shell.style.visibility = '';
  return el._split;
}

function initInfoSlider(root) {
  if (root.dataset.ready === 'true') return;
  if (typeof gsap === 'undefined' || typeof SplitText === 'undefined') return;

  gsap.registerPlugin(SplitText);
  root.dataset.ready = 'true';

  const titles = [...root.querySelectorAll('.card--title')];
  const titleTexts = titles.map((el) => el.querySelector('[data-anim="h"]'));
  const images = [...root.querySelectorAll('.card--image')];
  const copies = [...root.querySelectorAll('.card--copy')];
  const texts = copies.map((el) => el.querySelector('[data-anim="p"]'));
  const actions = copies.map((el) => el.querySelector('[data-anim="ctn"]'));
  const currentEl = root.querySelector('[data-current]');
  const progressEl = root.querySelector('[data-progress]');
  const count = copies.length;

  if (count < 2) return;

  const reduced = window.matchMedia(REDUCED_QUERY).matches;
  let current = 0;
  let animating = false;
  let inView = false;
  let progressTween = null;
  let resizeTimer = 0;

  titleTexts.forEach(splitTitle);
  texts.forEach(splitText);

  function imageEl(node) {
    return node.querySelector('img');
  }

  function hideIncomingPose(index) {
    gsap.set(titleTexts[index]._split.chars, { opacity: 0, yPercent: 50, rotateY: 90 });
    gsap.set(texts[index]._split.lines, { yPercent: 110 });
    gsap.set(actions[index], { opacity: 0, y: SHIFT });
    gsap.set(images[index], { clipPath: ENTER_CLIP });
    gsap.set(imageEl(images[index]), { scale: 1.5, xPercent: 25 });
  }

  function applyLayers(next, leaving) {
    const layers = [titles, images, copies];
    layers.forEach((nodes) => {
      nodes.forEach((el, index) => {
        el.classList.toggle('is-active', index === next);
        el.classList.toggle('is-leaving', leaving != null && index === leaving);
        el.setAttribute('aria-hidden', index === next ? 'false' : 'true');
      });
    });
    copies.forEach((el, index) => {
      el.inert = index !== next;
    });
    currentEl.textContent = String(next + 1);
  }

  function stopAuto() {
    progressTween?.kill();
    progressTween = null;
    gsap.set(progressEl, { width: '0%' });
  }

  function startAuto() {
    stopAuto();
    if (reduced || !inView || document.hidden) return;
    progressTween = gsap.fromTo(progressEl, { width: '0%' }, {
      width: '100%',
      duration: AUTO,
      ease: 'none',
      onComplete: () => go(current + 1),
    });
  }

  function showPose(index) {
    gsap.set(titleTexts[index]._split.chars, { opacity: 1, yPercent: 0, rotateY: 0 });
    gsap.set(texts[index]._split.lines, { yPercent: 0 });
    gsap.set(actions[index], { opacity: 1, y: 0 });
    gsap.set(images[index], { clipPath: REVEAL_CLIP });
    gsap.set(imageEl(images[index]), { scale: 1, xPercent: 0 });
  }

  function finish(next) {
    animating = false;
    showPose(next);
    applyLayers(next, null);
    startAuto();
  }

  function play(prev, next) {
    const fromChars = titleTexts[prev]._split.chars;
    const toChars = titleTexts[next]._split.chars;
    const fromLines = texts[prev]._split.lines;
    const toLines = texts[next]._split.lines;
    const fromImage = images[prev];
    const toImage = images[next];
    const fromImg = imageEl(fromImage);
    const toImg = imageEl(toImage);
    const fromAction = actions[prev];
    const toAction = actions[next];

    hideIncomingPose(next);

    const tl = gsap.timeline({
      onComplete: () => finish(next),
    });

    tl.to(fromChars, {
      opacity: 0,
      yPercent: -50,
      rotateY: -90,
      duration: DUR_S,
      stagger: STAGGER * 0.25,
      ease: EASE_IN,
    }, 0);
    tl.to(fromLines, {
      yPercent: -110,
      duration: DUR_S,
      stagger: STAGGER * 0.5,
      ease: EASE_IN,
    }, 0);
    tl.to(fromAction, {
      opacity: 0,
      duration: DUR_S,
      ease: EASE_IN,
    }, 0);
    tl.fromTo(fromImage, {
      clipPath: LEAVE_FROM_CLIP,
    }, {
      clipPath: LEAVE_TO_CLIP,
      duration: DUR_L,
      ease: EASE_IN_OUT,
    }, 0);
    tl.to(fromImg, {
      scale: 1.5,
      xPercent: -25,
      duration: DUR_L,
      ease: EASE_IN_OUT,
    }, 0);

    tl.fromTo(toImage, {
      clipPath: ENTER_CLIP,
    }, {
      clipPath: REVEAL_CLIP,
      duration: DUR_L,
      ease: EASE_IN_OUT,
    }, 0);
    tl.fromTo(toImg, {
      scale: 1.5,
      xPercent: 25,
    }, {
      scale: 1,
      xPercent: 0,
      duration: DUR_L,
      ease: EASE_IN_OUT,
    }, 0);

    tl.fromTo(toChars, {
      opacity: 0,
      yPercent: 50,
      rotateY: 90,
    }, {
      opacity: 1,
      yPercent: 0,
      rotateY: 0,
      duration: DUR_L,
      stagger: STAGGER * 0.5,
      ease: EASE_OUT,
      immediateRender: false,
    }, DUR_M);
    tl.fromTo(toLines, {
      yPercent: 110,
    }, {
      yPercent: 0,
      duration: DUR_L,
      stagger: STAGGER,
      ease: EASE_OUT,
      immediateRender: false,
    }, DUR_M);
    tl.fromTo(toAction, {
      opacity: 0,
      y: SHIFT,
    }, {
      opacity: 1,
      y: 0,
      duration: DUR_L,
      ease: EASE_OUT,
      immediateRender: false,
    }, DUR_M + DUR_S);
  }

  function go(index) {
    const next = (index + count) % count;
    if (next === current || animating) return;

    const prev = current;
    current = next;
    stopAuto();

    if (reduced) {
      finish(next);
      return;
    }

    animating = true;
    applyLayers(next, prev);
    play(prev, next);
  }

  for (let index = 1; index < count; index += 1) hideIncomingPose(index);
  applyLayers(0, null);

  root.querySelector('[data-prev]').addEventListener('click', () => go(current - 1));
  root.querySelector('[data-next]').addEventListener('click', () => go(current + 1));

  const io = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) startAuto();
    else stopAuto();
  }, { threshold: 0.2 });
  io.observe(root);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto();
    else if (inView && !animating) startAuto();
  });

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (animating) return;
      texts.forEach((el) => {
        el._split?.revert();
        el._split = null;
      });
      texts.forEach(splitText);
      texts.forEach((el, index) => {
        if (index === current) return;
        gsap.set(el._split.lines, { yPercent: 110 });
      });
    }, 150);
  });
}

function boot() {
  document.querySelectorAll('.info-slider').forEach(initInfoSlider);
}

if (document.fonts?.ready) {
  document.fonts.ready.then(boot).catch(boot);
} else {
  boot();
}
