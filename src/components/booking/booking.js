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

const BOOKING_DATE_LOCALES = {
  'ru-RU': {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd.MM.yyyy',
    timeFormat: 'HH:mm',
    firstDay: 1
  },
  'en-US': {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm aa',
    firstDay: 0
  }
}

function resolveBookingLocale(lang) {
  const normalized = (lang || 'ru-RU').replace('_', '-').toLowerCase()
  if (normalized.startsWith('en')) return BOOKING_DATE_LOCALES['en-US']
  return BOOKING_DATE_LOCALES['ru-RU']
}

function toAirDateFormat(format) {
  return format
    .replace(/YYYY/g, 'yyyy')
    .replace(/YY/g, 'yy')
    .replace(/DD/g, 'dd')
    .replace(/D/g, 'd')
}

function formatAirDate(date, format) {
  const parts = {
    yyyy: String(date.getFullYear()),
    yy: String(date.getFullYear()).slice(-2),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    dd: String(date.getDate()).padStart(2, '0'),
  }

  return format.replace(/yyyy|yy|MM|dd/g, (token) => parts[token])
}

function toIsoDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

function countNights(from, to) {
  const start = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate())
  const end = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate())
  return Math.round((end - start) / 86400000)
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
    const AirDatepicker = window.AirDatepicker

    if (!AirDatepicker) {
      console.error('AirDatepicker не найден в window. Проверь подключение main.libs.js')
    } else {
      let date_inputs = calendar_input.querySelectorAll('.booking__calendar-item')
      let date_el_1 = date_inputs[0]
      let date_el_2 = date_inputs[1]

      if (date_el_1) {
        let date_format = toAirDateFormat(block.dataset.format || 'DD.MM.YYYY')
        let is_mobile = window.matchMedia('(max-width: 668px)').matches
        let today_date = new Date()
        today_date.setHours(0, 0, 0, 0)
        let tomorrow_date = new Date(today_date)
        tomorrow_date.setDate(today_date.getDate() + 1)
        let is_preselected = block.dataset.booking === 'preselected_dates'

        const syncRange = (dates) => {
          let list = Array.isArray(dates) ? dates : []
          date_el_1.value = list[0] ? formatAirDate(list[0], date_format) : ''
          if (date_el_2) date_el_2.value = list[1] ? formatAirDate(list[1], date_format) : ''
          arrival_date = list[0] ? toIsoDate(list[0]) : ''
          leave_date = list[1] ? toIsoDate(list[1]) : ''
          total_days = list[0] && list[1] ? countNights(list[0], list[1]) : ''
        }

        date_el_1.readOnly = true
        if (date_el_2) date_el_2.readOnly = true

        const picker = new AirDatepicker(date_el_1, {
          classes: 'booking-datepicker',
          locale: resolveBookingLocale(block.dataset.lang),
          range: true,
          minDate: today_date,
          autoClose: true,
          toggleSelected: false,
          isMobile: is_mobile,
          dateFormat: (date) => formatAirDate(date, date_format),
          multipleDatesSeparator: ' - ',
          selectedDates: is_preselected ? [today_date, tomorrow_date] : false,
          prevHtml: '<span class="icon-ic-chevron-left"></span>',
          nextHtml: '<span class="icon-ic-chevron-right"></span>',
          position: is_mobile ? 'bottom left' : ({$datepicker, $pointer}) => {
            let coords = calendar_input.getBoundingClientRect()
            let dpHeight = $datepicker.clientHeight
            let top = coords.top > window.innerHeight / 2
              ? coords.top + window.scrollY - dpHeight - 8
              : coords.bottom + window.scrollY + 4

            $datepicker.style.left = `${coords.left}px`
            $datepicker.style.top = `${top}px`
            $pointer.style.display = 'none'
          },
          onSelect({date}) {
            syncRange(Array.isArray(date) ? date : [])
          },
        })

        if (date_el_2) {
          date_el_2.addEventListener('focus', () => {
            picker.show()
          })
        }

        if (is_preselected) {
          syncRange(picker.selectedDates)
          setTimeout(() => syncRange(picker.selectedDates), 0)
        }
      }
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

