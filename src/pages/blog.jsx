import HeroLayoutWithBreadcrumbs from '../layouts/HeroLayoutWithBreadcrumbs.jsx';
import { metaPages } from '../shared/meta-pages.js';

export default function Home() {
  return <HeroLayoutWithBreadcrumbs meta={metaPages.home} className={'page-blog'} colorMode={'-light-mode'}>

  </HeroLayoutWithBreadcrumbs>;
}
