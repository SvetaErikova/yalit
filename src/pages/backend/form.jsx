import { Form } from "../../components/form/form-comp.jsx";
import MainLayout from "../../layouts/MainLoyout.jsx";
import { metaPages } from "../../shared/meta-pages";

export default function Home() {
	return (
		<MainLayout meta={metaPages.home} className={'-light-mode'}>
			<div style={"max-width: 900px; margin: auto;"}>
				<Form></Form>
			</div>
		</MainLayout>
	);
}
