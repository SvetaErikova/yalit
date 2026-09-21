import { All_block_image_text } from "../../components/block/block_image_text/all_block_image_text.jsx";
import HeroLayout from "../../layouts/HeroLayout.jsx";
import MainLayout from "../../layouts/MainLoyout.jsx";
import MainWithoutBreadcrumbsLayout from "../../layouts/MainWithoutBreadcrumbs.jsx";
import { metaPages } from "../../shared/meta-pages";
import { Map_contacts } from '../../components/map/map-comp.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';
import { Accordion_full } from '../../components/_ui/accordion/accordion-full.jsx';

export default function Home() {
	return (
    <MainWithoutBreadcrumbsLayout meta={metaPages.home}>
      <All_block_image_text></All_block_image_text>
    </MainWithoutBreadcrumbsLayout>
  );
}
