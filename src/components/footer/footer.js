const copyrightYear = document.getElementById('js-current_year');

if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}

const footer = document.querySelector('.footer');

// if (footer) {
//   let footerMain = footer.querySelector('.footer--main'),
//     footerMainWrapper = footer.querySelector('.footer--main_wrapper');
//
//   gsap.to(footerMainWrapper, {
//     translate: '0 0',
//     ease: 'none',
//     scrollTrigger: {
//       trigger: footerMain,
//       start: 'top bottom',
//       end: 'bottom bottom',
//       scrub: 0,
//       // pin: footerMainWrapper,
//       // pinSpacing: false,
//       // markers: true,
//     },
//   });
// }

