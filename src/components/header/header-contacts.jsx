import { ContactsContent } from '../content/contacts/contacts-content.jsx';

export const HeaderContacts = () => {
  return (
    <div className="header--contacts -desk">
      <a href="tel:+7 495 697 08 53" title="+7 495 697 08 53" className="header--contacts-button">
        <span>+7 495 697 08 53</span>
      </a>
      <span>Крым, с. Малореченское, ул. Парковая, 24</span>
      <ContactsContent className="header--contacts-list" />
    </div>
  );
};
