import { Footer } from "../components/footer/footer-comp.jsx";
import { Header } from "../components/header/header-comp.jsx";
import { Popups } from "../components/popups/popups.comp.jsx";
import BaseHtml from "../templates/BaseHtml";
import { FooterTop } from '../components/footer/footer-top.jsx';

export default function MainWithoutBreadcrumbsLayout({ children, meta, lightmode=false,  className, colorMode = '' }) {
	return (
		<BaseHtml meta={meta} lightmode={lightmode} className={className} colorMode={colorMode}>
			<Header pagePath={meta.path} />
			<main>{children}
        <FooterTop></FooterTop></main>

			<Footer></Footer>
			<Popups></Popups>
		</BaseHtml>
	);
}
