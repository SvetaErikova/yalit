import {FooterContacts} from "./footer-contacts.jsx";
import {FooterNav} from "./footer-nav.jsx";
import {FooterBottom} from "./footer-bottom.jsx";
import { Form_subscription } from '../form/form-subscription.jsx';
import { FooterLogo } from './footer-logo.jsx';
import { FooterAwards } from './footer-awards.jsx';

export const Footer = () => {
	return (
    <>
      <footer className="footer">
          <div className="footer--main">
            <div className="footer--col">
              <FooterContacts></FooterContacts>
              <Form_subscription></Form_subscription>
              <FooterAwards></FooterAwards>
            </div>
            <div className="footer--col">
              <FooterNav></FooterNav>
            </div>
          </div>
          <FooterLogo></FooterLogo>
          <FooterBottom></FooterBottom>
      </footer>
    </>
);
};
