import { Breadcrumbs } from "../components/breadcrumbs/breadcrumbs.jsx";
import { Footer } from "../components/footer/footer-comp.jsx";
import { Header } from "../components/header/header-comp.jsx";
import { Popups } from "../components/popups/popups.comp.jsx";
import BaseHtml from "../templates/BaseHtml";

export default function MainLayout({ children, meta, className, colorMode = '' }) {
	return (
		<BaseHtml meta={meta} colorMode={colorMode}  className={className}>
			<Header pagePath={meta.path} />
			<main>
				<Breadcrumbs></Breadcrumbs>
				{children}
			</main>
			<Footer></Footer>
			<Popups></Popups>
		</BaseHtml>
	);
}
