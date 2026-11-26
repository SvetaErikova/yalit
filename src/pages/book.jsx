import { metaPages } from "../shared/meta-pages";
import HeroLayoutWithBreadcrumbs from '../layouts/HeroLayoutWithBreadcrumbs.jsx';
import { Book } from '../components/content/custom/book/book.jsx';

export default function Home() {
  return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.home}>
      <Book></Book>
    </HeroLayoutWithBreadcrumbs>
  );
}
