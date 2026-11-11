import clsx from 'clsx';
import { Button } from '../_ui/button/button.jsx';
import { Nav } from '../nav/nav.jsx';
import { Dropdown } from '../_ui/dropdown/dropdown.jsx';
import { HeaderContacts } from './header-contacts.jsx';
import { HeaderInfo } from './header-info.jsx';
import { HeaderLogo } from './header-logo.jsx';

export const Header = ({ transparent = false, hotel = false }) => {
  return (
    <>
      <header class={clsx('header', { 'header-transparent': transparent })}>
        <div class="header--main">
          <Button type={'filled-secondary'} className={'header--hotel_select'} icon={'icon-ic-chevron-down'}>
            <span>ВЫбрать отель</span>
          </Button>

          <HeaderLogo hotel={hotel} />
          <div className="header--actions ">
            <div className={'button button-filled-secondary is_dropdown'}>
              <span className={'icon-ic-language-ru'}></span>
              <div className="is_dropdown--wrapper">
                <div className="is_dropdown--content">
                  <div className="nav--item">
                    <a href="" className="nav--item_link"><span class={'icon-ic-language-ru'}></span></a>
                  </div>
                  <div className="nav--item">
                    <a href="" className="nav--item_link"><span class={'icon-ic-language-en'}></span></a>
                  </div>
                  <div className="nav--item">
                    <a href="" className="nav--item_link"><span class={'icon-ic-language-tt'}></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className={'button button-filled-secondary is_dropdown'}>
              <span className={'icon-ic-phone'}></span>
              <div className="is_dropdown--wrapper">
                <div className="is_dropdown--content">
                  <div className="nav--item">
                    <a href="" className="nav--item_link">
                      <span class={'icon-ic-phone'}></span>
                      <span>dropdown-item</span>
                    </a>
                  </div>
                  <div className="nav--item">
                    <a href="" className="nav--item_link">
                      <span className={'icon-ic-email'}></span>
                      <span>dropdown-item</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Button type={'filled-secondary'} icon={'icon-ic-user'}>
            </Button>
            <Button type={'filled-accent'}>
              забронировать
            </Button>


          </div>
        </div>
        <div class="header--bottom">
          <div class="header--nav">
            <Nav hotel={hotel} />
          </div>
        </div>
      </header>
      <div class="header--mobile_panel">
        <Button type={'filled-primary'} data-openpopup={'popup_for_hotels_select'}>выбрать отель</Button>
        <Button href={'/booking'} type={'filled-accent'}>Забронировать</Button>
      </div>
    </>

  );
};
