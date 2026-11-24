import { OverflowNav } from '../../scripts/overflow-nav.js';

const readNavItem = (item) => {
  const link = item.querySelector('a.nav--item_link');
  if (!link) return null;

  const labelSpan = link.querySelector('span:not([class*="icon"])');
  const label = (labelSpan?.textContent || link.textContent).trim();
  if (!label) return null;

  return {
    href: link.getAttribute('href') ?? '',
    label,
  };
};

const createOverflowNavItem = ({ href, label }) => {
  const item = document.createElement('div');
  item.className = 'nav--item';

  const link = document.createElement('a');
  link.className = 'nav--item_link';
  link.href = href;

  const labelNode = document.createElement('span');
  labelNode.textContent = label;

  link.append(labelNode);
  item.append(link);
  return item;
};

const overflowNavMedia = window.matchMedia('(min-width: 769px)');

const initHeaderOverflowNav = () => {
  const controllers = [];

  document.querySelectorAll('.header .header--nav .nav').forEach((nav) => {
    const list = nav.querySelector('.nav--item-more [data-overflow-nav]');
    if (!list) return;

    const copies = new WeakMap();
    let overflowNav = null;

    const enable = () => {
      if (overflowNav?._inited) return;

      overflowNav = new OverflowNav({
        rootElement: nav,
        selectors: {
          root: '.nav',
          more: '.nav--item-more',
        },
        changeItemFn(item, { direction }) {
          const copy = copies.get(item);

          if (direction === 'toMain') {
            copy?.remove();
            return;
          }

          if (copy) {
            list.append(copy);
            return;
          }

          const data = readNavItem(item);
          if (!data) return;

          const next = createOverflowNavItem(data);
          list.append(next);
          copies.set(item, next);
        },
      });
    };

    const disable = () => {
      overflowNav?.destroy();
      overflowNav = null;
      list.replaceChildren();
    };

    controllers.push({
      enable,
      disable,
      redistribute: () => overflowNav?.redistribute(),
    });
  });

  const sync = () => {
    controllers.forEach(({ enable, disable }) => {
      if (overflowNavMedia.matches) enable();
      else disable();
    });
  };

  sync();
  overflowNavMedia.addEventListener('change', sync);
  document.fonts?.ready.then(() => {
    if (!overflowNavMedia.matches) return;
    controllers.forEach(({ redistribute }) => redistribute());
  });
};

initHeaderOverflowNav();

window.addEventListener('load', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  let header_height = document.querySelector('.header--main').getBoundingClientRect().height;
  document.documentElement.style.setProperty('--headerHeight', `${header_height}px`);
  let header_height_bottom = document.querySelector('.header--bottom')?.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--headerHeightBottom', `${header_height_bottom}px`);

});

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

});

let last_scroll = 0;

const btn_openHotelSelect = document.querySelectorAll('.header--hotel_select');
const popupHotelSelect = document.querySelector('[data-popup="popup_for_hotels_select"]');

btn_openHotelSelect.forEach(btn => {
  btn.addEventListener('click', () => {
    popupHotelSelect.classList.contains('is_active') ? PopupManager.close('popup_for_hotels_select') : PopupManager.open('popup_for_hotels_select');
  });
});

window.addEventListener('scroll', (e) => {
  let current_scroll = window.scrollY || document.documentElement.scrollTop;
  const header = document.querySelector('header');

  if (current_scroll >= last_scroll && current_scroll > 60) {
    header.classList.add('scrolled-up');
  } else {
    header.classList.remove('scrolled-up');
  }

  last_scroll = current_scroll;
});

