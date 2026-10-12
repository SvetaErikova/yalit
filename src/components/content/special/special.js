let page_special = document.querySelector('.page-special')
if (page_special) {
  let cards_special = page_special.querySelectorAll('.card')
  cards_special.forEach((card, index) => {
    if (index % 2 === 1) {
      card.classList.add('-dark')
    }
  });
}
