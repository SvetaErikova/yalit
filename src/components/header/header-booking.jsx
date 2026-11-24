import { Button } from '../_ui/button/button.jsx';
import { HeaderLogo } from './header-logo.jsx';

export const HeaderBooking = () => {
  return (
    <header class={'header'}>
      <div class="header--main">
        <div className={'button button-filled-secondary dropdown btn-booking'}>
          <span>ВЫбрать отель</span>
          <span className={'icon-ic-chevron-down'}></span>
          <div className="dropdown--wrapper">
            <div className="dropdown--content">
              <div className="nav--item">
                <a href="" className="nav--item_link">
                  <span>Ногай</span>
                </a>
              </div>
              <div className="nav--item">
                <a href="" className="nav--item_link">
                  <span>Кол Гали</span>
                </a>
              </div>
              <div className="nav--item">
                <a href="" className="nav--item_link">
                  <span>Миллениум Панорама</span>
                </a>
              </div>
              <div className="nav--item">
                <a href="" className="nav--item_link">
                  <span>Ак Барс Резорт</span>
                </a>
              </div>
              <div className="nav--item">
                <a href="" className="nav--item_link">
                  <span>Рисала</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <HeaderLogo hotel={true} />
        <div class="header--booking_contacts">
          <p>Бронирование на официальном сайте</p>
          <a href="tel:+78432947078">Помощь: +7 (843) 294-70-78</a>
        </div>
      </div>
    </header>
  )
}
