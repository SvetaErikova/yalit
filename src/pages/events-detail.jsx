import { metaPages } from "../shared/meta-pages.js";
import HeroWithBreadcrumbs from '../layouts/HeroWithBreadcrumbs.jsx';


export default function Home() {
  return (
    <HeroWithBreadcrumbs meta={metaPages.events}>

    </HeroWithBreadcrumbs>
  );
}
