import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import {
  All_card_galleries,
  All_card_offers,
  All_card_special, All_cards_accommodation,
} from '../components/_ui/card/all_card.jsx';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Faq } from '../components/content/faq/faq.jsx';
import { Booking } from '../components/booking/booking-comp.jsx';
import { Block_selection } from '../components/block/_ui/block--selection/block--selection-comp.jsx';
import { Form_short } from '../components/form/form_short.jsx';
import { Contacts } from '../components/content/contacts/contacts-comp.jsx';
import HotelLayout from '../layouts/HotelLayout.jsx';
import { InfoSlider } from '../components/content/custom/info-slider/info-slider.jsx';


export default function Home() {
  return (
    <HotelLayout meta={metaPages.home} className={'page-main-hotel'}>
      <Block_banner
        banners={[
          {
            title: <Block_Head title="ялит" subtitle="Исследуйте татарстан с отелями" headingLevel={1} />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
        className={"block_banner-main"}
      ></Block_banner>
      <Booking></Booking>
      <InfoSlider></InfoSlider>

      <Block_List
        className="content_accommodation"
        slider={true}
        title={
          <Block_Head
            title={'Проживание'}
            subtitle={'content_accommodation'}
            caption={'Проживание слайдер'}
            headingLevel={2}

          ></Block_Head>
        }
      >
        <All_cards_accommodation />
      </Block_List>


      {/*карточки special*/}
      <Block_List
        className="content_special"
        link={true}
        title={
          <Block_Head
            title={'спецпредложения'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_special />
      </Block_List>

      <Block_List
        className="content_offers"
        link={true}
        slider={true}
        selection={<Block_selection tabs={[
          { label: 'Все' },
          { label: 'ногай' },
          { label: 'кол гали' },
          { label: 'ак барс резорт' },
          { label: 'миллениум панорама' },
        ]}></Block_selection>}
        title={
          <Block_Head
            title={'события'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_offers />
      </Block_List>


      <Faq>
        <Form_short></Form_short>
      </Faq>

      <Contacts></Contacts>

      <Block_List
        className={'content_gallery -theme-dark'}
        link={true}
        slider={true}
        title={
          <Block_Head
            title={'Галерея карточки'}
            subtitle={'content_gallery'}
            caption={'Галерея слайдер '}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_galleries group={'gallery-slider'}></All_card_galleries>
      </Block_List>

      <Block_banner className={'block_banner-fit_content'}
        banners={[
          {
            title: <Block_Head title="погрузитесь в атмосферу татарского гостеприимства"  headingLevel={3}  />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
      ></Block_banner>
      <Booking></Booking>
    </HotelLayout>
  );
}
