import { metaPages } from '../shared/meta-pages.js';
import HeroLayoutWithBreadcrumbs from '../layouts/HeroLayoutWithBreadcrumbs.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import { AboutMedia } from '../components/content/custom/about-media/about-media.jsx';
import { InfoMedia } from '../components/content/custom/info-media/info-media.jsx';

export default function Home() {
  return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.home} className={'page-about'}>
      <Block_banner banners={[
        {
          title:
            <Block_Head title="О нас" subtitle="Подзаголовок" headingSize={'f-h1'} caption="Баннер Hero" headingLevel={1}  />,
          imageSrc: '/assets/img/1.jpg',
        },
      ]}
                    className={'block_banner-hero'}></Block_banner>
  <AboutMedia></AboutMedia>
      <Block_image_text className={'-theme-accent'} title={<Block_Head title={'Длинный тайтл в несколько строк'}></Block_Head> }
                        content={<>
                          <p>Да, пляжи есть у отелей кол гали и ак барс резорт.
                            Ногай и Миллениум Панорама — это городские отели в центре Казани. Собственного пляжа нет,
                            однако городские пляжи (Кремлёвская набережная, озеро Кабан) находятся в 15–20 минутах от
                            отелей. Наш консьерж с радостью поможет организовать трансфер.</p>
                          <p>Да, пляжи есть у отелей кол гали и ак барс резорт.
                            Ногай и Миллениум Панорама — это городские отели в центре Казани. Собственного пляжа нет,
                            однако городские пляжи (Кремлёвская набережная, озеро Кабан) находятся в 15–20 минутах от
                            отелей. Наш консьерж с радостью поможет организовать трансфер.</p>
                        </>}>
      </Block_image_text>
      <Block_image_text
        decor
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={<Block_Head  title={'Почувствуй свободу'}/>}
        content={<p>Простор и вдохновение — суть нашего комбо-отеля. Номера от 35 м2 с окнами от пола до потолка наполняют интерьер светом и воздухом, создавая ощущение полной свободы. Это же ощущение вас не покинет и за пределами личного номера: в ресторане за завтраком, у бассейна в тишине заката, в зале для тренировок или в гостевых зонах. Спокойный интерьер без ярких акцентов не отвлекает от панорамных видов на город и не мешает проникнуться настроением «снаружи», которое никогда не повторяется из-за непостоянства погоды, освещения и времени. Этот танец света и тени меняет настроение отеля и делает его живым, словно в нем живёт несколько разных интерьеров.</p>}
      />
    <InfoMedia></InfoMedia>
    </HeroLayoutWithBreadcrumbs>
  );
}
