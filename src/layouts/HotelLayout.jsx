import { Footer } from "../components/footer/footer-comp.jsx";
import { Header } from "../components/header/header-comp.jsx";
import { Popups } from "../components/popups/popups.comp.jsx";
import BaseHtml from "../templates/BaseHtml";

export default function HotelLayout({ children, meta, className, colorMode = '' }) {
	return (
		<BaseHtml meta={meta}  className={className} colorMode={colorMode}>
			<Header hotel={true} pagePath={meta.path} />
			<main>{children}
      </main>
			<Footer></Footer>
			<Popups></Popups>
		</BaseHtml>
	);
}
