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
  case swiper_item.classList.contains('content_card'):
    slides_per_view_desktop = 4;
    slides_per_view_desktop_small = 3;
    slides_per_view_pad = 2.2;
    slides_per_view_mob = 1;
    break;
  case swiper_item.classList.contains('content_offers'):
    slides_per_view_desktop = 3;
    slides_per_view_desktop_small = 2.4;
    slides_per_view_pad = 2.1;
    slides_per_view_mob = 1.1;
    break;
  case swiper_item.classList.contains('content_article'):
    slides_per_view_desktop = 4;
    slides_per_view_desktop_small = 3;
    slides_per_view_pad = 2.2;
    slides_per_view_mob = 1;
    break;
  case swiper_item.classList.contains('content_advantages'):
    slides_per_view_desktop = 6;
    slides_per_view_desktop_small = 4.5;
    slides_per_view_pad = 3.2;
    slides_per_view_mob = 2.2;
    break;
  case swiper_item.classList.contains('-col-3'):
    slides_per_view_desktop = 3;
    slides_per_view_desktop_small = 3;
    slides_per_view_pad = 2.2;
    slides_per_view_mob = 1.1;
    break;
  case swiper_item.classList.contains('content_reviews'):
    slides_per_view_desktop = 2;
    slides_per_view_desktop_small = 2;
    slides_per_view_pad = 1.7;
    slides_per_view_mob = 1.2;
    break;
  case swiper_item.classList.contains('content_special'):
    slides_per_view_desktop = 1;
    slides_per_view_desktop_small = 1;
    slides_per_view_pad = 1;
    slides_per_view_mob = 1;
    break;
  case swiper_item.classList.contains('content_cards-fest'):
    slides_per_view_desktop = 2;
    slides_per_view_desktop_small = 2;
    slides_per_view_pad = 2.1;
    slides_per_view_mob = 1.1;
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


  swiper_item.querySelector('.block--wrapper').append(controls);


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
if (window.matchMedia("(max-width: 1024px)").matches && document.querySelector('.content_offers')) {
  activateBlocklistSlider(document.querySelector('.content_offers'))
}
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
