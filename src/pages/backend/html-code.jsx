import { metaPages } from '../../shared/meta-pages';
import MainLayout from '../../layouts/MainLoyout.jsx';
import { VerticalCards } from '../../components/content/custom/vertical-cards/vertical-cards.jsx';
import { Tariffs } from '../../components/content/tarifs/tarifs.jsx';
import { Faq } from '../../components/content/faq/faq.jsx';
import { Accommodation } from '../../components/content/accomodation/accommodation.jsx';

export default function Home() {

  return (
    <MainLayout meta={metaPages.home}>
      <Accommodation></Accommodation>
      <Tariffs/>
      <VerticalCards></VerticalCards>

      {/*Faq С картинкой*/}
      <Faq image={true}></Faq>
      {/*Faq ез картинки */}
      <Faq image={false}></Faq>
    </MainLayout>
  );
}
