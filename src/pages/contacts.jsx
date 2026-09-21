import { metaPages } from '../shared/meta-pages';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import {Accordion_full} from "../components/_ui/accordion/accordion-full.jsx";
import {Contacts} from "../components/content/contacts/contacts-comp.jsx";
import HeroLayout from '../layouts/HeroLayout.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';
import { Form_short } from '../components/form/form_short.jsx';
import MainLayout from '../layouts/MainLoyout.jsx';
import {Faq} from "../components/content/faq/faq.jsx";


export default function Home() {
  return (
    <MainLayout meta={metaPages.home} className={'page-contacts'}>
      <Contacts></Contacts>
      <Faq image={false}></Faq>
      <Block_image_text title={
        <Block_Head
          title={'напишите нам'}
          headingLevel={2}
        />
      } content={
        <Form_short></Form_short>
      } />
    </MainLayout>
  );
}
