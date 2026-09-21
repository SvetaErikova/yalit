import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import {
  All_card_offers,
  All_card_services,
  All_card_tariff,
  All_cards_special,
} from '../components/_ui/card/all_card.jsx';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import { HeroContent } from '../components/content/custom/hero-content/hero-content.jsx';
import { Faq } from '../components/content/faq/faq.jsx';
import { Tariffs } from '../components/content/tarifs/tarifs.jsx';


export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Block_banner
        banners={[
          {
            title: <Block_Head title="Входной билет"  headingSize={'f-h1'}  caption="Насладитесь прогулкой по Саду, рассмотрите все элементы элементы и достопримечательности, раскрывающие его красоту и гармонию. Почувствуйте атмосферу этого места и сделайте лучшие фото." action={<>
              <Button type="filled-primary" color="brand" icon="icon-ic-uniq-arrow-right">Купить билет</Button>
            </>} />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
        className={"block_banner-hero"}
      >
        <HeroContent main={false}></HeroContent>
      </Block_banner>
      <Tariffs/>

      <Block_List
        className="content_tariffs"
        slider={true}
        title={
          <Block_Head
            title={"Другие категории билетов можно приобрести в кассе"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_tariff />
      </Block_List>

      <Block_List
        className="content_special"
        slider={true}
        title={
          <Block_Head
            title={"спецпредложения"}
            subtitle={"特別オファー"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_cards_special />
      </Block_List>
      <Block_List
        className="content_offers"
        link={true}
        title={
          <Block_Head
            title={"Афиша"}
            subtitle={"ポスター"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_offers />
      </Block_List>

      <Faq image={true}></Faq>

      <Block_List
        className="content_services"
        link={true}
        title={
          <Block_Head
            title={"другие услуги"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services />
      </Block_List>
    </HeroLayout>
  );
}
