import {
  buildControls,
  withNavigationAndPagination,
  defaultSwiperOptions
} from './helpers';
import { doc } from 'prettier';


/* Slider for banners */
const activateBannerSlider = (banner_block) => {
  const banner_wrapper = banner_block.querySelector('.block--wrapper');

  const { controls, prev, next } = buildControls({
    pagination: false,
    darkMode: true,
  });
  banner_wrapper.append(controls);

  const swiperOptions = {
    slideClass: 'banner',
    slidesPerView: 1,
    grabCursor: false,
    centeredSlides: true,
    focusableElements: 'a, button',
    loop: true,
    pagination: false,
    effect: 'fade',
  };

  const banner_slider = new Swiper(
    banner_block.querySelector('.block--wrapper'),
    withNavigationAndPagination(swiperOptions, {
      pagination: false,
      prev,
      next,
    }),
  );
};

const banner_slider_block = document.querySelectorAll('.block_banner-group');
banner_slider_block.forEach((bs) => {
  activateBannerSlider(bs);
});

/* Block_list slider Слайдеры в списках */
const activateBlocklistSlider = (swiper_item) => {
  let slides_per_view_desktop = 4,
    slides_per_view_desktop_small = 3,
    slides_per_view_pad = 2,
    slides_per_view_mob = 1,
    space_between = 16,
    slides_centered = false;

  switch (true) {
  case swiper_item.classList.contains('content_cards'):
    slides_per_view_desktop = 2;
    slides_per_view_desktop_small = 2;
    slides_per_view_pad = 1.5;
    slides_per_view_mob = 1.1;
    break;
  case swiper_item.classList.contains('content_article'):
    slides_per_view_desktop = 2;
    slides_per_view_desktop_small = 2;
    slides_per_view_pad = 1.5;
    slides_per_view_mob = 1.1;
    break;
  case swiper_item.classList.contains('content_services'):
    slides_per_view_desktop = 2;
    slides_per_view_desktop_small = 2;
    slides_per_view_pad = 1.5;
    slides_per_view_mob = 1.1;
    break;
  case swiper_item.classList.contains('content_offers'):
    slides_per_view_desktop = 3;
    slides_per_view_desktop_small = 2.2;
    slides_per_view_pad = 2.1;
    slides_per_view_mob = 1.1;
    break;

  // case swiper_item.classList.contains('-col-3'):
  //   slides_per_view_desktop = 3;
  //   slides_per_view_desktop_small = 3;
  //   slides_per_view_pad = 2.2;
  //   slides_per_view_mob = 1.1;
  //   break;
  case swiper_item.classList.contains('content_special'):
    slides_per_view_desktop = 1;
    slides_per_view_desktop_small = 1;
    slides_per_view_pad = 1;
    slides_per_view_mob = 1;
    break;
  case swiper_item.classList.contains('content_rooms'):
    slides_per_view_desktop = 2;
    slides_per_view_desktop_small = 2;
    slides_per_view_pad = 1.5;
    slides_per_view_mob = 1.1;
    break;
  case swiper_item.classList.contains('content_accommodation'):
    slides_per_view_desktop = 3;
    slides_per_view_desktop_small = 3;
    slides_per_view_pad = 1.5;
    slides_per_view_mob = 1;
    break;
  case swiper_item.classList.contains('content_category'):
    slides_per_view_desktop = 4;
    slides_per_view_desktop_small = 3;
    slides_per_view_pad = 1.5;
    slides_per_view_mob = 1;
    break;


  default:
    slides_per_view_desktop = 4;
    slides_per_view_desktop_small = 3;
    slides_per_view_pad = 2.2;
    slides_per_view_mob = 1.1;
    slides_centered = false;
  }

  const { controls, prev, next } = buildControls({ pagination: false });
  const blockElements = swiper_item.querySelector('.block--elements');

  blockElements.append(controls);


  const swiper = new Swiper(
    blockElements,
    withNavigationAndPagination(
      {
        slideClass: 'card',
        freeMode: false,
        noSwipingClass: 'swiper-no-swiping-block',
        spaceBetween: space_between,
        thumbs: false,
        watchOverflow: true,
        pagination: false,
        autoHeight: false,
        centeredSlides: slides_centered,
        breakpoints: {
          220: { slidesPerView: slides_per_view_mob },
          640: { slidesPerView: slides_per_view_pad },
          768: { slidesPerView: slides_per_view_desktop_small },
          1240: { slidesPerView: slides_per_view_desktop },
        },
      },
      { pagination: false, prev, next },
    ),
  );
};

const block_list_sliders = document.querySelectorAll('.block_list-slider');
block_list_sliders.forEach((slider) => {
  activateBlocklistSlider(slider);
});

// Gallery
let activateGallerySliders = (gallery) => {
  if (gallery.querySelectorAll('.gallery--item').length <= 1) {
    return;
  }
  const content_gallery = gallery.closest('.content_gallery');
  const isFestivalGallery = Boolean(gallery.closest('.page-fest'));

  let controlsSet;
  if (content_gallery) {
    let spaceBetween = 32
    controlsSet = buildControls({
      pagination: false,
      navigation: true,
    });
    content_gallery.querySelector('.block--wrapper').append(controlsSet.controls);
  } else {
    controlsSet = buildControls({
      pagination: true,
      navigation: true,
    });
    gallery.append(controlsSet.controls);
  }

  const paginationConfig = content_gallery
    ? false
    : {
        type: 'bullets',
        clickable: true,
      };
  const breakpoints = isFestivalGallery
    ? {
        220: { slidesPerView: 1 },
        640: { slidesPerView: 2.2 },
        768: { slidesPerView: 3 },
        1240: { slidesPerView: 4 },
      }
    : {
      220: { spaceBetween: 8 },
      768: { spaceBetween: 16 },
      1240: { spaceBetween: 32 },
    };

  const swiperOptions = withNavigationAndPagination(
    {
      slideClass: 'gallery--item',
      slidesPerView: isFestivalGallery ? 1 : content_gallery ? 1.3 : 1,
      spaceBetween: 8,
      freeMode: false,
      // loop: content_gallery ? false : true,
      loop: true,
      centeredSlides: isFestivalGallery ? false : true,
      grabCursor: true,
      navigation: true,
      pagination: paginationConfig,
      effect: content_gallery ? 'slide' : 'fade',
      breakpoints: content_gallery ? breakpoints: undefined,
    },
    controlsSet,
  );
  new Swiper(gallery, swiperOptions);
};

const galleries = document.querySelectorAll('.js-gallerySwiper');
galleries.forEach((gallery) => {
  activateGallerySliders(gallery);
});

const isCardImageMobile = () => window.matchMedia('(max-width: 1023px)').matches;

function limitCardImages(cards) {
  const maxIndex = cards.length > 10 && isCardImageMobile() ? 0 : 4;
  if (cards.length > 10 && !isCardImageMobile()) return;

  cards.forEach((card) => {
    card.querySelectorAll('.card__image_slide').forEach((mediaElement, index) => {
      if (index > maxIndex) mediaElement.remove();
    });
  });
}

function initRoomCardsImages(card) {
  const slider = card.querySelector('.card--image');
  if (!slider) return;

  const roomImages = slider.querySelectorAll('img, video');
  if (roomImages.length <= 1) return;

  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
  const sliderControls = document.createElement('div');
  sliderControls.classList.add('card_slider_controls');
  slider.append(sliderControls);

  const swiperPagination = document.createElement('div');
  swiperPagination.classList.add('swiper-pagination');
  sliderControls.append(swiperPagination);

  const sliderPagination = {
    el: swiperPagination,
    clickable: true,
    type: 'bullets',
  };
  let sliderNavigation = false;

  if (isDesktop) {
    const swiperNavPrev = document.createElement('div');
    swiperNavPrev.classList.add('card_swiper-button-prev');
    sliderControls.prepend(swiperNavPrev);

    const swiperNavNext = document.createElement('div');
    swiperNavNext.classList.add('card_swiper-button-next');
    sliderControls.append(swiperNavNext);

    sliderNavigation = {
      nextEl: swiperNavNext,
      prevEl: swiperNavPrev,
    };
  }

  const cardRoomSlider = new Swiper(slider, {
    createElements: true,
    slidesPerView: 1,
    allowTouchMove: isCardImageMobile(),
    touchStartPreventDefault: false,
    nested: true,
    zoom: false,
    grabCursor: true,
    freeMode: false,
    loop: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    slideClass: 'card__image_slide',
    navigation: sliderNavigation,
    pagination: sliderPagination,
    on: {
      init(swiper) {

        if (swiper.slides.length <= swiper.params.slidesPerView) {
          swiper.disable();
          return;
        }

        const area = document.createElement('div');
        area.classList.add('room_images_hover', 'swiper-no-swiping');
        swiper.el.appendChild(area);
        swiper.slides.forEach(() => {
          const slideArea = document.createElement('div');
          slideArea.classList.add('room_images_hover_item');
          area.appendChild(slideArea);
        });
      },
    },
  });

  if (!isDesktop) return;

  slider.querySelectorAll('.room_images_hover_item').forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      cardRoomSlider.slideTo(index);
    });
  });
}

['.content_accommodation .card', '.content_rooms .card'].forEach((selector) => {
  const cards = document.querySelectorAll(selector);
  limitCardImages(cards);
  cards.forEach((card) => {
    initRoomCardsImages(card);
  });
});

function initHotelGroupSlider(block) {
  const cardsEl = block.querySelector('.block--elements');
  const headsEl = block.querySelector('.block--heads');
  const tabs = [...block.querySelectorAll('.block--selection > a')];
  if (!cardsEl || !headsEl || tabs.length < 2) return;

  const speed = 600;
  const heads = [...headsEl.querySelectorAll(':scope > .block--head')];

  const cardsSlider = new Swiper(cardsEl, {
    createElements: true,
    slideClass: 'card',
    effect: 'slide',
    loop: true,
    speed,
    slidesPerView: 1,
    allowTouchMove: false,
    simulateTouch: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  const visibleIndex = () => {
    const slide = cardsSlider.slides[cardsSlider.activeIndex];
    const index = slide?.getAttribute('data-swiper-slide-index');
    return index === null ? cardsSlider.realIndex : Number(index);
  };

  const show = (index) => {
    heads.forEach((head, headIndex) => {
      head.classList.toggle('is_active', headIndex === index);
    });
    tabs.forEach((tab, tabIndex) => {
      tab.classList.toggle('is_active', tabIndex === index);
    });
  };

  show(visibleIndex());

  cardsSlider.on('realIndexChange', () => {
    show(visibleIndex());
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      cardsSlider.autoplay.stop();
      if (cardsSlider.realIndex !== index) cardsSlider.slideToLoop(index);
    });
  });
}
const hotel_group = document.querySelector('.hotel-group')
if (hotel_group){
  initHotelGroupSlider(hotel_group)
}
