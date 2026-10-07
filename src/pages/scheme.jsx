import HeroLayoutWithBreadcrumbs from "../layouts/HeroLayoutWithBreadcrumbs.jsx";
import { metaPages } from "../shared/meta-pages";
import { Scheme } from '../components/scheme/scheme.jsx';

export default function Home() {
  return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.scheme}>
      <Scheme></Scheme>
    </HeroLayoutWithBreadcrumbs>
  );
}
