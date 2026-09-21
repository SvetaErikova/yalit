import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import {
  All_card_reviews,
  All_card_services,
} from '../components/_ui/card/all_card.jsx';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import { HeroContent } from '../components/content/custom/hero-content/hero-content.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';
import { Faq } from '../components/content/faq/faq.jsx';
import { Block_selection } from '../components/block/_ui/block--selection/block--selection-comp.jsx';


export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Block_banner
        banners={[
          {
            title:
              <Block_Head title="экскурсии" headingSize={'f-h1'} caption="Насладитесь прогулкой по Саду, рассмотрите все элементы элементы и достопримечательности, раскрывающие его красоту и гармонию. Почувствуйте атмосферу этого места и сделайте лучшие фото." action={<>
                <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Купить билет</Button>
              </>} />,
            imageSrc: '/assets/img/1.jpg',
          },
        ]}
        className={'block_banner-hero'}
      >
        <HeroContent main={false}></HeroContent>
      </Block_banner>

      <Block_image_text reversed={true}
                        ratioFill={true}
                        images={[
                          { src: '../../assets/img/2.jpg' },
                        ]}
                        title={<Block_Head title={'стоимость экскурсий'} />} content={<>
        <div className="list-table">
          <div className="item">
            <p>групповая взрослый</p>
            <span>2 500 ₽ </span>
          </div>
          <div className="item">
            <p>групповая детский</p>
            <span>1 250 ₽ </span>
          </div>
          <div className="item">
            <p>индивидуальная<br></br>
              взрослый, до 4-х человек</p>
            <span>12 000 ₽ </span>
          </div>
          <div className="item">
            <p>индивидуальная +<br></br>
              взрослый, до 4-х человек</p>
            <span>16 000 ₽ </span>
          </div>
          <div className="item">
            <p>групповая (льготный)</p>
            <span>1 600 ₽ </span>
          </div>
          <div className="item">
            <p>день рождения</p>
            <span>1 600 ₽ </span>
          </div>
        </div>
        <div className={'block--actions'}>
          <Button color={'neutral'} type={'filled-primary'} icon="icon-ic-uniq-arrow-right">забронировать</Button>
        </div>
      </>} />



      <Block_List
        className="content_reviews"
        slider={true}
        title={
          <Block_Head
            title={"отзывы"}
            subtitle={"レビュー"}
            headingLevel={2}

          ></Block_Head>
        }
      >
        <All_card_reviews></All_card_reviews>
      </Block_List>

      <Faq image={true}></Faq>

      <Block_List
        className="content_services"
        link={true}
        title={
          <Block_Head
            title={'другие услуги'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services />
      </Block_List>
    </HeroLayout>
  );
}
