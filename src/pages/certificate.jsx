import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import {
  All_card_services,
} from '../components/_ui/card/all_card.jsx';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import { HeroContent } from '../components/content/custom/hero-content/hero-content.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';


export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Block_banner
        banners={[
          {
            title: <Block_Head title="сертификат"  headingSize={'f-h1'}  caption="Подарите себе и близким релакс в источниках с термальной водой, расположенных прямо под открытым небом. Минеральный состав воды обеспечит отдых и покой, подарит приятное расслабление, снимет стресс, улучшит общее самочувствие и тонус тела." action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Купить билет</Button>
            </>} />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
        className={"block_banner-hero"}
      >
        <HeroContent main={false}></HeroContent>
      </Block_banner>

      <Block_image_text title={<Block_Head title={'о сертификате'}/>}
                        className="block_image_text_ar-4-3"
                        images={[
                          { src: '../../assets/img/1.jpg' },
                        ]}
                        content={<>
        <p>Подарочный сертификат — это возможность провести день среди природы, тишины и японских традиций. Гости смогут прогуляться по саду, посетить чайную церемонию, примерить традиционное кимоно или отдохнуть в термальных источниках под открытым небом.</p>
                          <p>Сертификат подойдёт:</p>
                          <ul>
                            <li>для дня рождения,</li>
                            <li>романтического подарка,</li>
                            <li>семейного отдыха,</li>
                            <li>или просто как повод замедлиться и сменить ритм города.</li>
                          </ul>
                          <p>Каждый визит — это возможность замедлиться, восстановить силы и прикоснуться к атмосфере японских традиций.</p>
                          <ul>
                            <li>для дня рождения,</li>
                            <li>романтического подарка,</li>
                            <li>семейного отдыха,</li>
                            <li>или просто как повод замедлиться и сменить ритм города.</li>
                          </ul>
                          <div class="block--actions">
                            <Button type={'filled-primary'} color={'neutral'} icon="icon-ic-uniq-arrow-right">оформить</Button>
                          </div>

                        </>}/>


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
        <All_card_services/>
      </Block_List>
    </HeroLayout>
  );
}
