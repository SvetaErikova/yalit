import clsx from "clsx";
import { Button } from '../_ui/button/button.jsx';

export const Booking = ({className=''}) => {
  return (
    <div className={clsx("block--search", className)}>
      <div className="block--search_title">Бронирование</div>
      <div className="booking js-booking" data-booking="preselected_dates" data-lang="ru-Ru" data-format="DD.MM.YYYY">
        <div className="booking__inputs">

          <div className="booking__calendar_wrapper">
            <div className="booking__input_title">
              даты
            </div>
            <label className="booking__calendar">
              <span className='icon-calendar'></span>
              <div className="booking__calendar--item">

                <input className="booking__calendar-item" id="checkin" placeholder="" />
              </div>
              <span>-</span>
              <div className="booking__calendar--item">

                <input className="booking__calendar-item" id="checkout" placeholder="" />
              </div>

            </label>
          </div>

          <div className="booking__guests">
            <div className="booking__input_title">
              количество гостей
            </div>

            <div className="booking__guests-input">
              <span className="icon-user"></span>
              <span id="booking__guests_input">2 взрослых</span>
            </div>
            <div className="booking__guests-popover">
              <div className="booking__guests-popover-item">
                <span>Взрослые:</span>
                <div className="booking__guests-popover-input js-quantity_input">
                  <Button className="js-decrement" type={'filled'} color={'secondary'} icon={'icon-minus'} size={'s'} />
                  <input className="booking__guests-popover-input-number" data-adults="" type="number" placeholder="0" defaultValue="2" inputMode="numeric" />
                  <Button className="js-increment" type={'filled'} color={'secondary'} icon={'icon-plus'} size={'s'} />
                </div>
              </div>
              <div className="booking__guests-popover-item">
                <span>Дети младше 12 лет:</span>
                <div className="booking__guests-popover-input js-quantity_input">
                  <Button className="js-decrement" type={'filled'} color={'secondary'} icon={'icon-minus'} size={'s'} />
                  <input className="booking__guests-popover-input-number" data-children="" type="number" placeholder="0" defaultValue="0" inputMode="numeric" />
                  <Button className="js-increment" type={'filled'} color={'secondary'} icon={'icon-plus'} size={'s'} />
                </div>
                <div className="booking__guests-popover-children is_hidden">
                  <span>Укажите возраст:</span>
                  <div className="booking__guests-popover-children-selects">
                  </div>
                  <template id="children_age_select">
                    <div className="booking__guests-popover-children-select">
                      <span>Ребенок <span className="booking__guests-popover-children-select-order"></span></span>
                      <select className="booking__guests-popover-children-select-item">
                        <option value="" defaultValue disabled>Возраст</option>
                        <option value="0">До года</option>
                        <option value="1">1 год</option>
                        <option value="2">2 года</option>
                        <option value="3">3 года</option>
                        <option value="4">4 года</option>
                        <option value="5">5 лет</option>
                        <option value="6">6 лет</option>
                        <option value="7">7 лет</option>
                        <option value="8">8 лет</option>
                        <option value="9">9 лет</option>
                        <option value="10">10 лет</option>
                        <option value="11">11 лет</option>
                      </select>
                    </div>
                  </template>
                </div>
              </div>
              <div className="booking__guests-popover-button">
                <Button className=" js-guests_submit" type={'filled'} color={'secondary'}>
                  <span>Применить</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="booking__button">
          <Button type={'filled'} color={'accent'} size={'s'} className="js-guests_submit">
            Найти номера
          </Button>
        </div>
      </div>
    </div>
  );
};
