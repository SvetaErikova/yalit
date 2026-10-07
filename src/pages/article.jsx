import HeroLayoutWithBreadcrumbs from '../layouts/HeroLayoutWithBreadcrumbs.jsx';
import { metaPages } from '../shared/meta-pages.js';
import { Article } from '../components/content/article/article.jsx';

export default function Home() {
  return <HeroLayoutWithBreadcrumbs meta={metaPages.home} className={'page-article'}>
    <Article></Article>
  </HeroLayoutWithBreadcrumbs>;
}
