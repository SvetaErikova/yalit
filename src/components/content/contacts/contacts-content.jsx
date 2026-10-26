import { Button } from '../../_ui/button/button.jsx';

const cx = (...classes) => classes.filter(Boolean).join(' ');

export const ContactsContent = ({ className = '' }) => {
  return (
    <div className={cx('contacts-content', className)}>
      <div className="contacts-content_title">
        Гостиница «Ногай»
      </div>

      <ul className="contacts-content_list">
        <li className="contacts-content_item">
          <div className="contacts-content_item-title">Адрес</div>
          <div className="contacts-content_item-list">
            <p></p>
            <span>Крым, улица, номер дома</span>
          </div>
        </li>

        <li className="contacts-content_item">
          <div className="contacts-content_item-title">Телефон</div>
          <div className="contacts-content_item-list">
            <a href="mailto:someEmail@mail.ru"> someEmail@mail.ru</a>
            <a href="mailto:someEmail@mail.ru"> someEmail@mail.ru</a>
          </div>
        </li>

        <li className="contacts-content_item">
          <div className="contacts-content_item-title">Email</div>
          <div class="contacts-content_item-list">
            <a href="mailto:someEmail@mail.ru"> someEmail@mail.ru</a>
          </div>
        </li>

        <li className="contacts-content_item">
          <div className="contacts-content_item-title">Социальные сети</div>
          <div className="contacts-content_social">
            <Button link={'/'} type={'filled-secondary'} icon={'icon-telegram'} ></Button>
            <Button link={'/'} type={'filled-secondary'} icon={'icon-vk'} ></Button>
            <Button link={'/'} type={'filled-secondary'} icon={'icon-ok'} ></Button>
            <Button link={'/'} type={'filled-secondary'} icon={'icon-youtube'} ></Button>
          </div>
        </li>
      </ul>
    </div>
  );
};
