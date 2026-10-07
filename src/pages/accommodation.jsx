import { metaPages } from "../shared/meta-pages.js";
import HotelLayoutWithBreadcrumbs from '../layouts/HotelLayoutWithBreadcrumbs.jsx';


export default function Home() {
  return (
    <HotelLayoutWithBreadcrumbs meta={metaPages.home}>

    </HotelLayoutWithBreadcrumbs>
  );
}
