import MainLayout from "../layouts/MainLoyout.jsx";
import { metaPages } from "../shared/meta-pages";
import { Faq } from '../components/content/faq/faq.jsx';

export default function Home() {
	return (
		<MainLayout meta={metaPages.home}>
      <Faq image={true}></Faq>
      <Faq image={false}></Faq>
		</MainLayout>
	);
}
