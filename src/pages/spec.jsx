import {metaPages} from "../shared/meta-pages.js";
import HotelLayoutWithBreadcrumbs from '../layouts/HotelLayoutWithBreadcrumbs.jsx';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { All_card_special } from '../components/_ui/card/content/special.jsx';

export default function Home() {
  return <HotelLayoutWithBreadcrumbs meta={metaPages.spec} className={'page-special'} >
    <Block_List
      className="content_special"
    >
      <All_card_special />
    </Block_List>
  </HotelLayoutWithBreadcrumbs>;
}
