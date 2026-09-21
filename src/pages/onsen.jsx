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
import { VerticalCards } from '../components/content/custom/vertical-cards/vertical-cards.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';


export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Block_banner
        banners={[
          {
            title: <Block_Head title="Онсен"  headingSize={'f-h1'}  caption="Термальные купели Онсэн под открытым небом. Погрузитесь в горячую воду источников и откройте для себя великолепный вид на море и горы." action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Купить билет</Button>
            </>} />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
        className={"block_banner-hero"}
      >
        <HeroContent main={false}></HeroContent>
      </Block_banner>
      <VerticalCards />
      <Block_List
        className="content_services"
        slider={true}
        link={true}
        title={
          <Block_Head
            title={"виды купелей онсен"}
            subtitle={'温泉の種類'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services />
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
      <Block_image_text title={<Block_Head title={'правила посещения'}/>} content={<>
      <p>Уважаемые гости, вода в горячих источниках насыщена минеральными элементами, просим вас убедиться, что вы не имеете противопоказаний для принятия термальных ванн.</p>
      <p>Японский сад — это уникальное место для прогулок и созерцания, где ценят и уважают японскую культуру и друг друга. Его посещают много людей и для того, чтобы всем гостям сада было комфортно и приятно в нем находится, просим соблюдать правила.</p>
        <p>— Каждый гость купели получает в пользование индивидуальное полотенце. В связи с этим просим вас соблюдать нормы культурного поведения и использовать их только на территории купален, и не передвигаться в них по всей территории Сада.<br></br>— Убедительная просьба не употреблять алкогольные напитки.</p>
        <p>Ежедневно: 8:00–20:00<br></br>
          Запись обязательна.<br></br>
          * Требуется предварительное бронирование.</p>
      </>} />



      <Block_List
        className="content_services"
        link={true}
        title={
          <Block_Head
            title={"форматы посещения"}
            subtitle={"訪問形式"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services />
      </Block_List>
    </HeroLayout>
  );
}
