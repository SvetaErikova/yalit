function initAccommodationAccordion(block) {
    let items = block.querySelectorAll('.item');

    items.forEach((item) => {
      let button = item.querySelector('.item--title');
      button.addEventListener('click', () => {
        items.forEach((it) => {
          it !== item ? it.classList.remove('is_open') : it.classList.toggle('is_open');
        });
      });
    });

    items[0].querySelector('.item--title').click()

}

let accommodation = document.querySelector('.content_accommodation.block_element');
if(accommodation){

  document.addEventListener('DOMContentLoaded', () => {
    initAccommodationAccordion(accommodation);
  });

}
