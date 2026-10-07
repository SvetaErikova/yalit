import HeroLayoutWithBreadcrumbs from "../layouts/HeroLayoutWithBreadcrumbs.jsx";
import { metaPages } from "../shared/meta-pages";
import { Faq } from '../components/content/faq/faq.jsx';

export default function Home() {
	return (
		<HeroLayoutWithBreadcrumbs meta={metaPages.home}>
      <Faq image={true}></Faq>
      <Faq image={false}></Faq>
		</HeroLayoutWithBreadcrumbs>
	);
}
