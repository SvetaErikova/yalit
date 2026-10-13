import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { All_card_offers, All_card_services, All_card_special } from '../components/_ui/card/all_card.jsx';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import { Accommodation } from '../components/content/accomodation/accommodation.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';
import { Faq } from '../components/content/faq/faq.jsx';
import { Input } from '../components/form/inputs/input/input_comp.jsx';
import { Form_policy } from '../components/form/form_policy.jsx';
import { Input_textarea } from '../components/form/inputs/input_textarea/input_textarea_comp.jsx';
import { Booking } from '../components/booking/booking-comp.jsx';
import { HotelGroupComp } from '../components/content/custom/hotel-group/hotel-group-comp.jsx';
import { Block_selection } from '../components/block/_ui/block--selection/block--selection-comp.jsx';


export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Block_banner
        banners={[
          {
            title: <Block_Head title="ялит" subtitle="Исследуйте татарстан с отелями" headingLevel={1} />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
        className={"block_banner-custom"}
      ></Block_banner>
      <Booking></Booking>
      <HotelGroupComp></HotelGroupComp>

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


      {/*<Faq image={false}></Faq>*/}

    </HeroLayout>
  );
}
