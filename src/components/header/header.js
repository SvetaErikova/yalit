window.addEventListener('load', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  let header_height = document.querySelector('header').getBoundingClientRect().height
  document.documentElement.style.setProperty('--headerHeight', `${header_height}px`)

  let header_actions_width = document.querySelector('.header--actions').getBoundingClientRect().width
  document.documentElement.style.setProperty('--headerActionsWidth', `${header_actions_width}px`)

});

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)

})

/* Скролл хедера */

let last_scroll = 0;

window.addEventListener('scroll', (e) => {
  document.documentElement.scrollTop > 0 ? document.querySelector('header').classList.add('is_scrolled') : document.querySelector('header').classList.remove('is_scrolled')

})

window.addEventListener('load', (e) => {
  document.documentElement.scrollTop > 0 ? document.querySelector('header').classList.add('is_scrolled') : document.querySelector('header').classList.remove('is_scrolled')

}, {once:true})

// открытие меню
const btn_openMenu = document.querySelectorAll('.btn-openMenu')
const popupMenu = document.querySelector('[data-popup="popup_for_menu"]')

btn_openMenu.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(popupMenu.classList.contains('is_active'));
    popupMenu.classList.contains('is_active') ? PopupManager.close('popup_for_menu') : PopupManager.open('popup_for_menu')
  })
})

/* Скролл хедера мобилка */
// if (window.matchMedia('(max-width:992px)').matches) {
//   window.addEventListener('scroll', (e) => {
//     let current_scroll = window.scrollY || document.documentElement.scrollTop;
//     current_scroll >= last_scroll && current_scroll ? document.querySelector('header').classList.add('scrolled-up') : document.querySelector('header').classList.remove('scrolled-up')
//     last_scroll = current_scroll
//   })
//   let submenu_button = document.querySelector('#js-open_panel')
//   if ( submenu_button ) {
//     submenu_button.addEventListener('click', () => {
//       submenu_button.nextElementSibling.classList.toggle('active')
//     })
//   }
// }
