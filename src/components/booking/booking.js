function activateQuantityInputs(block) {
  let quantity_input = block.querySelectorAll('.js-quantity_input')

  quantity_input.forEach(f => {

    const decrements = f.querySelectorAll(".js-decrement");
    const increments = f.querySelectorAll(".js-increment");

    decrements.forEach(decrement => {
      decrement.addEventListener('click', function () {
        this.nextElementSibling.value--;
        if (this.nextElementSibling.value < 0) {
          this.nextElementSibling.value = 0
        }
        this.nextElementSibling.dispatchEvent(new Event('change', {'bubbles': true}));
      })
    });

    increments.forEach(increment => {
      increment.addEventListener('click', function () {
        this.previousElementSibling.value++;
        this.previousElementSibling.dispatchEvent(new Event('change', {'bubbles': true}));
      })
    });
  })
}

/* Booking */
function initBooking() {

  let block_booking = document.querySelectorAll('.js-booking');

  block_booking.forEach(block => {

  // Date Picker Input
  let calendar_input = block.querySelector('.booking__calendar');
  let booking_button = block.querySelector('.booking__button');
  let guests_input = block.querySelector('.booking__guests')


  let booking_link = "", arrival_date = "", leave_date = "", room = "", total_days = "", adults_number = 2,children_age = {}, children_age_link = "";


  if (calendar_input) {
    let date_el_1 = calendar_input.querySelector("#checkin")
    let date_el_2 = calendar_input.querySelector("#checkout")

    let date_format = block.dataset.format ? block.dataset.format : 'DD-MM-YYYY'
    let date_lang = block.dataset.lang ? block.dataset.lang : "ru-RU"

    let text_submit = "Применить"
    // if ( SITE.LANG === "en" ) {
    //   date_lang = "en-US";
    //   text_submit = "Apply"
    // }


    let current_date = new Date()
    let today_date = current_date.setDate(current_date.getDate());
    let tomorrow_date = current_date.setDate(current_date.getDate() + 1)


    const picker = new Litepicker({
      element: date_el_1,
      elementEnd: date_el_2,
      singleMode: false,
      startDate: today_date,
      autoApply: !window.matchMedia('(max-width: 668px)').matches,
      format: date_format,
      lang: date_lang,
      minDate: today_date,
      position: 'left auto',
      numberOfMonths: 2,
      numberOfColumns: 2,
      showTooltip: true,
      tooltipText: {
        one: 'ночь',
        two: 'ночи',
        few: 'ночи',
        many: 'ночей'
      },
      tooltipNumber: (totalDays) => {
        total_days = totalDays - 1
        return totalDays - 1;
      },
      setup: (picker) => {
        picker.on('selected', (date1, date2) => {
          arrival_date = date1.format('YYYY-MM-DD')
          leave_date = date2.format('YYYY-MM-DD')
        });
      },
      plugins: ['mobilefriendly'],
      mobilefriendly: {
        breakpoint: 668,
      },
      buttonText: {"apply":text_submit,"cancel":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
          "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.39859 4.3986C4.69149 4.10571 5.16636 4.10571 5.45925 4.3986L12 10.9393L18.5407 4.3986C18.8336 4.10571 19.3085 4.10571 19.6014 4.3986C19.8943 4.69149 19.8943 5.16637 19.6014 5.45926L13.0607 12L19.6014 18.5407C19.8943 18.8336 19.8943 19.3085 19.6014 19.6014C19.3085 19.8943 18.8336 19.8943 18.5407 19.6014L12 13.0607L5.45925 19.6014C5.16636 19.8943 4.69149 19.8943 4.39859 19.6014C4.1057 19.3085 4.1057 18.8336 4.39859 18.5407L10.9393 12L4.39859 5.45926C4.1057 5.16637 4.1057 4.69149 4.39859 4.3986Z\" fill=\"white\"/>\n" +
          "</svg>",}
    });

    const removePickerFooter = () => {
      const footer = picker.ui?.container?.querySelector('.container__footer');
      if (footer) {
        footer.remove();
      }
    };

    removePickerFooter();
    picker.on('render:footer', removePickerFooter);
    picker.on('show', removePickerFooter);

    if ( block.dataset.booking === "preselected_dates") {
      picker.setDateRange(today_date, tomorrow_date)
    }

  }

  //Room inputs
  if ( guests_input ) {

    activateQuantityInputs(guests_input)

    let number_inputs = guests_input.querySelectorAll('.booking__guests-popover-input-number')
    let number_output = guests_input.querySelector('#booking__guests_input')

    // Функция для склонения слова "взрослый"
    function getAdultsText(count) {
      const num = parseInt(count) || 0;
      if (num === 0) return '';
      if (num === 1) return '1 взрослый';
      if (num >= 2 && num <= 4) return `${num} взрослых`;
      return `${num} взрослых`;
    }

    // Функция для склонения слова "ребенок"
    function getChildrenText(count) {
      const num = parseInt(count) || 0;
      if (num === 0) return '';
      if (num === 1) return '1 ребенок';
      if (num >= 2 && num <= 4) return `${num} ребенка`;
      return `${num} детей`;
    }

    // Функция обновления текста
    function updateGuestsText() {
      let adultsCount = 0;
      let childrenCount = 0;

      number_inputs.forEach(inp => {
        const value = parseInt(inp.value) || 0;
        if (inp.hasAttribute('data-adults')) {
          adultsCount = value;
        }
        if (inp.hasAttribute('data-children')) {
          childrenCount = value;
        }
      });

      const parts = [];
      if (adultsCount > 0) {
        parts.push(getAdultsText(adultsCount));
      }
      if (childrenCount > 0) {
        parts.push(getChildrenText(childrenCount));
      }

      if (parts.length === 0) {
        number_output.textContent = '0 гостей';
      } else {
        number_output.textContent = parts.join(', ');
      }
    }

    // Инициализация текста
    updateGuestsText();

    number_inputs.forEach(inp => {
      inp.addEventListener('change', ()=>{
        if (inp.hasAttribute('data-adults')){
          adults_number = inp.value
        }

        if (inp.hasAttribute('data-children')){
          let selects_list = guests_input.querySelector('.booking__guests-popover-children')
          let selects_list_items = guests_input.querySelector('.booking__guests-popover-children-selects')
          selects_list_items.innerHTML = "";
          children_age = {};

          inp.value > 0 ? selects_list.classList.remove('is_hidden') : selects_list.classList.add('is_hidden')

          let children_age_select_template = guests_input.querySelector('#children_age_select')

          for ( let j = 1; j <= inp.value; j++) {
            let clone = children_age_select_template.content.cloneNode(true);

            clone.children[0].querySelector('.booking__guests-popover-children-select-order').textContent = j

            let clone_select = clone.children[0].querySelector('select')

            clone_select.addEventListener('change', ()=>{
              children_age[j] = clone_select.options[clone_select.selectedIndex].value
            })

            selects_list_items.appendChild(clone, true)

          }
        }

        // Обновляем текст после изменения
        updateGuestsText();
      })
    })

    let guest_input_button = guests_input.querySelector('.booking__guests-input')
    let guest_input_popup = guests_input.querySelector('.booking__guests-popover')


    window.addEventListener('keyup', function(e) {
      if ( e.key === "Escape" ) {
        guest_input_popup.classList.remove('is_active')
      }
    });

    guest_input_button.addEventListener('click', (e)=>{
      guest_input_popup.classList.toggle('is_active')

      if ( guests_input.getBoundingClientRect().top > (window.innerHeight / 2) ) {
        guest_input_popup.style.cssText = "bottom: 100%; top: unset"
      } else {
        guest_input_popup.style.cssText = "top: 100%; bottom: unset"
      }
    })

    let guest_submit_button = guests_input.querySelector('.js-guests_submit')
    guest_submit_button.addEventListener('click', ()=> {
      guest_input_popup.classList.remove('is_active')
    })
  }
  // Create link from inputs
  booking_button.addEventListener('click', (e) => {
    if ( typeof ROOM_ID !== 'undefined' ) {
      room = "&room-type=" + ROOM_ID
    }


    children_age_link = ""
    for (const [key, value] of Object.entries(children_age)) {
      children_age_link += `${value}`+';'
    }

    let link = "";


    // if ( SITE.LANG === "en" ) {
    //   link = "/en/booking/?" + "date=" + arrival_date + "&nights=" + total_days + room + "&adults=" + adults_number +"&children-age="+ children_age_link
    // } else {
    //   link = "/booking/?" + "date=" + arrival_date + "&nights=" + total_days + room + "&adults=" + adults_number +"&children-age="+ children_age_link
    // }

    window.open(link, '_blank')
  })

  })
}

// Инициализация при загрузке
window.addEventListener("load", () => {
  initBooking();
  initStickyBookingReveal();
});

function initStickyBookingReveal() {
  const mediaQuery = window.matchMedia('(min-width: 769px)');
  if (!mediaQuery.matches) return;

  const stickyBlocks = document.querySelectorAll('.block--search.block--search-sticky');
  if (!stickyBlocks.length) return;

  const setVisibility = (visible) => {
    stickyBlocks.forEach((block) => {
      block.classList.toggle('is_visible', visible);
    });
  };

  let lastScrollY = window.scrollY;
  const threshold = window.innerHeight || 0;
  const tolerance = 5;

  const handleScroll = () => {
    if (!mediaQuery.matches) {
      setVisibility(false);
      lastScrollY = window.scrollY;
      return;
    }

    const currentY = window.scrollY;
    const isScrollingDown = currentY > lastScrollY + tolerance;
    const isScrollingUp = currentY < lastScrollY - tolerance;

    if (isScrollingDown && currentY > threshold) {
      setVisibility(true);
    } else if (isScrollingUp || currentY <= threshold) {
      setVisibility(false);
    }

    lastScrollY = currentY;
  };

  mediaQuery.addEventListener('change', (event) => {
    if (!event.matches) {
      setVisibility(false);
    } else {
      lastScrollY = window.scrollY;
    }
  });

  setVisibility(false);
  window.addEventListener('scroll', handleScroll);
}

