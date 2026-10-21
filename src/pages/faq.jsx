import HeroLayoutWithBreadcrumbs from "../layouts/HeroLayoutWithBreadcrumbs.jsx";
import { metaPages } from "../shared/meta-pages";
import { Faq } from '../components/content/faq/faq.jsx';
import { Form_short } from '../components/form/form_short.jsx';

export default function Home() {
	return (
		<HeroLayoutWithBreadcrumbs meta={metaPages.home}>
      <Faq>
        <Form_short></Form_short>
      </Faq>
      <Faq></Faq>
		</HeroLayoutWithBreadcrumbs>
	);
}
