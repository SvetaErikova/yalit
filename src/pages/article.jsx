import MainLayout from '../layouts/MainLoyout.jsx';
import { metaPages } from '../shared/meta-pages.js';
import { Article } from '../components/content/article/article.jsx';

export default function Home() {
  return <MainLayout meta={metaPages.home} className={'page-article'}>
    <Article></Article>
  </MainLayout>;
}
