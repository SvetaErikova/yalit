import { All_block_banner } from "../../components/block/block_banner/all_block_banner.jsx";
import { metaPages } from "../../shared/meta-pages";
import HeroLayoutWithBreadcrumbs from '../../layouts/HeroLayoutWithBreadcrumbs.jsx';

export default function Home() {
	return (
		<HeroLayoutWithBreadcrumbs meta={metaPages.home}>
			<All_block_banner></All_block_banner>
		</HeroLayoutWithBreadcrumbs>
	);
}
