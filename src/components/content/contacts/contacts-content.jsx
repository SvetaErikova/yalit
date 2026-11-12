import { Button } from '../../_ui/button/button.jsx';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const ContactItem = ({ icon, href, note, children }) => {
  const Tag = href ? 'a' : 'p';

  return (
    <div className="contact--item">
      {icon && <span className={cx( icon)} />}
      <div className="contact-info">
        <Tag {...(href ? { href } : {})}>{children}</Tag>
        {note && <span>{note}</span>}
      </div>
    </div>
  );
};

const ContactGroup = ({ title, items = [], action, social }) => (
  <div className="contact--group">
    {title && <div className="contact--title">{title}</div>}
    {items.map((item) => (
      <ContactItem key={item.text} icon={item.icon} href={item.href} note={item.note}>
        {item.text}
      </ContactItem>
    ))}
    {social && (
      <div className="contact_social">
        <Button link={'/'} type={'filled-secondary'} icon={'icon-ic-max'} />
        <Button link={'/'} type={'filled-secondary'} icon={'icon-ic-vk'} />
        <Button link={'/'} type={'filled-secondary'} icon={'icon-ic-ok'} />
        <Button link={'/'} type={'filled-secondary'} icon={'icon-ic-telegram'} />
        <Button link={'/'} type={'filled-secondary'} icon={'icon-ic-youtube'} />
        <Button link={'/'} type={'filled-secondary'} icon={'icon-ic-rutube'} />
        <Button link={'/'} type={'filled-secondary'} icon={'icon-ic-whatsapp'} />
      </div>
    )}
    {action && (
      <div className="contact-action">
        <Button link={action.href} type={'filled-secondary'}>
          {action.label}
        </Button>
      </div>
    )}
  </div>
);

const ContactAccordion = ({ title, groups = [], open = false }) => (
  <div className={cx('accordion', open && 'is_open')}>
    <div className="accordion--button">
      <p className="accordion--button_text">{title}</p>
      <span className="icon-ic-plus" />
    </div>
    <div className="accordion--content">
      <div className="contact">
        {groups.map((group) => (
          <ContactGroup key={group.title || group.items[0]?.text} {...group} />
        ))}
      </div>
    </div>
  </div>
);

const hotelGroups = [
  {
    items: [
      {
        icon: 'icon-ic-place',
        text: '420126, Россия, Республика Татарстан, Казань, ул. Фатыха Амирхана, 1И',
        note: '55.8117, 49.1322',
      },
    ],
    action: { label: 'Как добраться', href: '/' },
  },
  {
    title: 'Служба приёма и размещения',
    items: [
      { icon: 'icon-ic-phone', text: '+7 (800) 201-74-00', href: 'tel:+78002017400' },
      { icon: 'icon-ic-envelope', text: 'info@mp-hotelskazan.com', href: 'mailto:info@mp-hotelskazan.com' },
    ],
  },
  {
    title: 'Отдел бронирования',
    items: [
      { icon: 'icon-ic-phone', text: 'reservation@hotelnogai.ru', href: 'tel:+78002017400' },
      { icon: 'icon-ic-envelope', text: 'reservation@hotelnogai.ru', href: 'mailto:reservation@hotelnogai.ru' },
    ],
  },
  {
    title: 'Отдел продаж и маркетинга',
    items: [
      { icon: 'icon-ic-phone', text: 'reservation@hotelnogai.ru', href: 'tel:+78002017400' },
      { icon: 'icon-ic-envelope', text: 'reservation@hotelnogai.ru', href: 'mailto:reservation@hotelnogai.ru' },
    ],
  },
  {
    title: 'Социальные сети',
    social: true,
  },
];

const hotels = [
  { title: 'Гостиница «Миллениум Панорама»', open: true, groups: hotelGroups },
  { title: 'Название отеля', groups: hotelGroups },
  { title: 'Название отеля', groups: hotelGroups },
  { title: 'Название отеля', groups: hotelGroups },
];

export const ContactsContent = ({ className = '' }) => {
  return (
    <div className={cx('contacts-content', className)}>
      <div className="is_cascade--accordion">
        {hotels.map((hotel, index) => (
          <ContactAccordion
            key={`${hotel.title}-${index}`}
            title={hotel.title}
            groups={hotel.groups}
            open={hotel.open}
          />
        ))}
      </div>
    </div>
  );
};
