/* Новые отзывы ( парсинг ) */
/* Галлерея в карточках отзывов */
Fancybox.bind('.review__image [data-fancybox] ', {
  infinite: false,
  groupAll: false,
  Images: {
    initialSize: "fit",
  },
})

/* Кнопка показать еще в отзыве  */

let activateReviewMoreButtons = (block) => {
  let show_more_review_buttons = block.querySelectorAll('.js-show_review')

  show_more_review_buttons.forEach(button => {

    if ( !button.hasAttribute('data-listener') ) {
      button.setAttribute('data-listener', '')

      button.addEventListener('click', (e) => {
        let block_width_content = button.closest('.review');
        let button_content = button.querySelector('.js-button_text')

        if (block_width_content && button_content) {
          if (button.classList.contains('active')) {
            block_width_content.classList.remove('active')
            button.classList.remove('active')
            button_content.textContent = button.dataset.show_more
          } else {
            block_width_content.classList.add('active')
            button.classList.add('active')
            button_content.textContent = button.dataset.show_less
          }
        }
      })
    }
  })
}
activateReviewMoreButtons(document)

let removeReviewMoreButtons = (block) => {
  let buttons = block.querySelectorAll('.js-show_review')
  buttons.forEach(button => {
    button.removeAttribute('data-listener')
  })
}


let activateReviewBlock = (block) => {
  let cards = block.querySelectorAll('.review')

  cards.forEach((card, index) => {
    let clamper = card.querySelector('.review_description--clamper')
    let wrapper = card.querySelector('.review_description--wrapper')
    let button = card.querySelector('.review__action')

    if ( !clamper || !wrapper || !button ) { return }

    if (  wrapper.offsetHeight > clamper.offsetHeight || clamper.offsetHeight < clamper.scrollHeight ) {
      button.classList.add('is_visible')
    }
  })
}
window.addEventListener('load', () => {
  activateReviewBlock(document)
})

let activateReviews = (block) => {
  activateReviewMoreButtons(block)
  activateReviewBlock(block)
}

/* Новые отзывы END */
