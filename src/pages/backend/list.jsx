import { All_block_list } from "../../components/block/block_list/all_block_list.jsx";
import { metaPages } from "../../shared/meta-pages";
import HeroLayoutWithBreadcrumbs from '../../layouts/HeroLayoutWithBreadcrumbs.jsx';

export default function Home() {
	return (
		<HeroLayoutWithBreadcrumbs meta={metaPages.home} >
			<All_block_list></All_block_list>
		</HeroLayoutWithBreadcrumbs>
	);
}
