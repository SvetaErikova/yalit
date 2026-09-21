import { Button } from '../../_ui/button/button.jsx';

const cx = (...classes) => classes.filter(Boolean).join(' ');

export const ContactsContent = ({ className = '' }) => {
  return (
    <div className={cx('contacts-content', className)}>
      <div className="contacts-content_title">
        контакты
      </div>

      <ul className="contacts-content_list">
        <li className="contacts-content_item">
          <div className="contacts-content_item-title">Адрес</div>
          <div className="contacts-content_text">
            Крым, улица, номер дома
          </div>
        </li>

        <li className="contacts-content_item">
          <div className="contacts-content_item-title">Телефон</div>
          <Button link={'tel:+7 499 999 99 99'} type={'link'} color={'neutral'}>
            +7 499 999 99 99
          </Button>
        </li>

        <li className="contacts-content_item">
          <div className="contacts-content_item-title">Email</div>
          <Button link={'mailto:someEmail@mail.ru'} type={'link'} color={'neutral'}>
            someEmail@mail.ru
          </Button>
        </li>

        <li className="contacts-content_item">
          <div className="contacts-content_item-title">Социальные сети</div>
          <div className="contacts-content_social">
            <Button link={'/'} type={'link'} color={'accent'} icon={'icon-telegram'} mode={'dark'}></Button>
            <Button link={'/'} type={'link'} color={'accent'} icon={'icon-vk'} mode={'dark'}></Button>
            <Button link={'/'} type={'link'} color={'accent'} icon={'icon-ok'} mode={'dark'}></Button>
            <Button link={'/'} type={'link'} color={'accent'} icon={'icon-youtube'} mode={'dark'}></Button>
          </div>
        </li>
      </ul>

      <div className="contacts-content_actions">
        <a className="button button-filled button-neutral button-s">Связаться с нами</a>
        <a className="button button-tinted button-neutral button-s">Построить маршрут</a>
      </div>
    </div>
  );
};
