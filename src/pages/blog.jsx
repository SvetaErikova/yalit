import MainLayout from '../layouts/MainLoyout.jsx';
import { metaPages } from '../shared/meta-pages.js';

export default function Home() {
  return <MainLayout meta={metaPages.home} className={'page-blog'} colorMode={'-light-mode'}>

  </MainLayout>;
}
