/* Инпут даты */

let activateDateInputs = ()=> {
  const AirDatepicker = window.AirDatepicker;

  if (!AirDatepicker) {
    console.error('AirDatepicker не найден в window. Проверь подключение main.libs.js');
    return;
  }

  let datapickers = document.querySelectorAll('[data-airpicker]')

  datapickers.forEach(input => {
    let date_lang = input.dataset.lang ? input.dataset.lang : "ru-RU";
    let locales = date_lang
    let range_picker = input.dataset.airpicker === 'range' ? true : false;
    let is_mobile = window.matchMedia('(max-width: 1023px)').matches;
    let date_apply_base = input.dataset.apply_base ? input.dataset.apply_base : "Применить";
    let date_apply_submit = input.dataset.apply_submit ? input.dataset.apply_submit : "Выбрать ";
    let date_timepicker = input.hasAttribute('data-timepicker') ? true : false;
    let is_autoclose = range_picker ? false : true;
    let view_mode = input.dataset.view ? input.dataset.view : 'days';
    let min_date, max_date;

    let locale_set = {
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
      'en-EN': {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Apply',
        clear: 'Clear',
        dateFormat: 'MM/dd/yyyy',
        timeFormat: 'hh:mm aa',
        firstDay: 0,
      }
    }

    let airPicker = new AirDatepicker(input, {
      inline: false,
      locale: locale_set[locales],
      timepicker: date_timepicker,
      autoClose: is_autoclose,
      view: view_mode,
      range: range_picker,
      multipleDatesSeparator: ' - ',
      // isMobile: is_mobile,
      position({$datepicker, $target, $pointer}) {
        let coords = $target.getBoundingClientRect(),
          dpHeight = $datepicker.clientHeight;

        let left = coords.x ;
        let top = coords.y > window.innerHeight / 2 ? coords.y  + window.scrollY - dpHeight - 8 : coords.y + coords.height + window.scrollY + 4;

        $datepicker.style.left = `${left}px`;
        $datepicker.style.top = `${top}px`;

        $pointer.style.display = 'none';
      },
      prevHtml: '<span class="icon-ic-chevron-left"></span>',
      nextHtml: '<span class="icon-ic-chevron-right"></span>',
      onSelect({date, formattedDate, datepicker}) {
      },
    })

    if (input.dataset.min && input.dataset.min !== "") {
      min_date = new Date(input.dataset.min)
      airPicker.update({minDate: min_date})
    }
    if (input.dataset.max && input.dataset.max !== "") {
      max_date = new Date(input.dataset.max)
      airPicker.update({maxDate: max_date})
    }

    if ( input.dataset.value ) {
      //airPicker.update({selectedDates: input.dataset.value })
      airPicker.selectDate(input.dataset.value)
      input.value = input.dataset.value
    }
    if (input.placeholder === "" && !input.dataset.value) {
      input.placeholder = (new Date().toLocaleDateString(date_lang));
    }
  })

}
activateDateInputs()
