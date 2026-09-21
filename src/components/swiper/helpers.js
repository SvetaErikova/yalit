// Small utilities to standardize Swiper controls and options

export function buildControls(options = {}) {
  const { navigation = true, pagination: needPagination = true } = options;

  const controls = document.createElement("div");
  controls.classList.add("slider_controls");

  let pagination = null;
  if (needPagination) {
    pagination = document.createElement("div");
    pagination.classList.add("swiper-pagination");
  }

  let prev = null;
  let next = null;
  if (navigation) {
    let arrow_left = document.createElement("span");
    arrow_left.classList.add("icon-ic-chevron-left");

    prev = document.createElement("div");
    prev.classList.add("swiper--prev");
    prev.appendChild(arrow_left);

    let arrow_right = document.createElement("span");
    arrow_right.classList.add("icon-ic-chevron-right");
    next = document.createElement("div");
    next.classList.add("swiper--next");
    next.appendChild(arrow_right);
  }

  // Добавляем элементы в controls только если они созданы
  const elementsToAppend = [];
  if (pagination) elementsToAppend.push(pagination);
  if (prev) elementsToAppend.push(prev);
  if (next) elementsToAppend.push(next);

  if (elementsToAppend.length > 0) {
    controls.append(...elementsToAppend);
  }

  return { controls, pagination, prev, next };
}

export const defaultSwiperOptions = (() => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  return {
    createElements: true,
    grabCursor: true,
    simulateTouch: true,
    allowTouchMove: true,
    mousewheel: { forceToAxis: true },
    // mousewheel: false,
    // simulateTouch: isMobile,
    // allowTouchMove: isMobile,
    watchOverflow: true,
    uniqueNavElements: true,
    focusableElements: "a, button, input, select, textarea, label, video",
  };
})();

export function withNavigationAndPagination(options, controls) {
  const { pagination, prev, next } = controls;

  const navigation = options.navigation === false || !prev || !next
    ? false
    : { nextEl: next, prevEl: prev, ...(options.navigation || {}) };

  const paginationCfg = options.pagination === false || !pagination
    ? false
    : { el: pagination, clickable: true, ...(options.pagination || {}) };

  return {
    ...defaultSwiperOptions,
    ...options,
    navigation,
    pagination: paginationCfg,
  };
}


