import { metaPages } from '../../shared/meta-pages';
import HeroLayoutWithBreadcrumbs from '../../layouts/HeroLayoutWithBreadcrumbs.jsx';
import { Tariffs } from '../../components/content/tarifs/tarifs.jsx';
import { Faq } from '../../components/content/faq/faq.jsx';
import { Accommodation } from '../../components/content/accomodation/accommodation.jsx';

export default function Home() {

  return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.home}>
      <Accommodation></Accommodation>
      <Tariffs/>
      {/*Faq С картинкой*/}
      <Faq image={true}></Faq>
      {/*Faq ез картинки */}
      <Faq image={false}></Faq>
    </HeroLayoutWithBreadcrumbs>
  );
}
