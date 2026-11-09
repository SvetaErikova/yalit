import HeroLayoutWithBreadcrumbs from '../layouts/HeroLayoutWithBreadcrumbs.jsx';
import { metaPages } from '../shared/meta-pages.js';
import { Is_cascade_full } from '../components/_ui/is_cascade/is_cascade-full.jsx';
import { Block_Sidebar } from '../components/block/_ui/block--sidebar/block--sidebar.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { Block } from '../components/block/block.jsx';

export default function Home() {
  return <HeroLayoutWithBreadcrumbs meta={metaPages.home} className={'page-article'}>
    <Block className={'content_article'}
           title={<Block_Head title={'Заголовок энного уровня'} subtitle={'Программа лояльности'} caption={'Tortor at donec in ornare et tellus. Nec blandit ultrices vitae iaculis vitae in dictum nec. Laoreet dignissim odio eu in. Vel.'}></Block_Head>}>
      <Block_Sidebar></Block_Sidebar>
      <Is_cascade_full></Is_cascade_full>
    </Block>
  </HeroLayoutWithBreadcrumbs>;
}
