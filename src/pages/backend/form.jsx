import { Form } from "../../components/form/form-comp.jsx";
import HeroLayoutWithBreadcrumbs from "../../layouts/HeroLayoutWithBreadcrumbs.jsx";
import { metaPages } from "../../shared/meta-pages";

export default function Home() {
	return (
		<HeroLayoutWithBreadcrumbs meta={metaPages.home} className={'-light-mode'}>
			<div style={"max-width: 900px; margin: auto;"}>
				<Form></Form>
			</div>
		</HeroLayoutWithBreadcrumbs>
	);
}
