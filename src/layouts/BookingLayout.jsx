import { Footer } from "../components/footer/footer-comp.jsx";
import { Popups } from "../components/popups/popups.comp.jsx";
import BaseHtml from "../templates/BaseHtml";
import { HeaderBooking } from '../components/header/header-booking.jsx';

export default function BookingLayout({ children, meta, className, colorMode = '' }) {
  return (
    <BaseHtml meta={meta}  className={className} colorMode={colorMode}>
      <HeaderBooking  />
      <main>{children}
      </main>
      <Footer></Footer>
      <Popups></Popups>
    </BaseHtml>
  );
}
