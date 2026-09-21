const hidePreloader = () => {
  const preloader = document.querySelector(".preloader");

  if (!preloader || preloader.dataset.ready === "true") {
    return;
  }

  if (sessionStorage.getItem("preloaderShown") === "true") {
    preloader.remove();
    return;
  }
  preloader.classList.add("is_active");
  preloader.dataset.ready = "true";

  window.setTimeout(() => {
    preloader.classList.remove("is_active");

    window.setTimeout(() => {
      preloader.remove();
      sessionStorage.setItem("preloaderShown", "true");
    }, 0);
  }, 2000);
};

if (document.readyState === "complete") {
  hidePreloader();
} else {
  window.addEventListener("load", hidePreloader, { once: true });
}
