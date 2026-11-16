const PRELOADER_PLAY_MS = 2600;
const PRELOADER_FADE_MS = 300;

const preloader = document.querySelector(".preloader");
const root = document.documentElement;

const closePreloader = () => {
  if (!preloader || preloader.dataset.ready === "true") return;

  preloader.dataset.ready = "true";
  preloader.classList.add("is_done");

  window.setTimeout(() => {
    preloader.remove();
  }, PRELOADER_FADE_MS);
};

if (!preloader || root.classList.contains("preloader-skip")) {
  preloader?.remove();
} else {
  const scene = preloader.querySelector(".preloader__scene--next");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && scene) {
    scene.addEventListener("animationend", closePreloader, { once: true });
  }

  window.setTimeout(closePreloader, reduceMotion ? 0 : PRELOADER_PLAY_MS);
}
