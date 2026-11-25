import HeroLayoutWithBreadcrumbs from "../layouts/HeroLayoutWithBreadcrumbs.jsx";
import { metaPages } from "../shared/meta-pages";
import { Scheme } from '../components/scheme/scheme.jsx';
import { Book } from '../components/content/custom/book/book.jsx';

export default function Home() {
  return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.scheme}>
      {/*<Scheme></Scheme>*/}
      <Book></Book>
    </HeroLayoutWithBreadcrumbs>
  );
}
