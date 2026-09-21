import HeroWithBreadcrumbs from '../layouts/HeroWithBreadcrumbs.jsx';
import { metaPages } from '../shared/meta-pages.js';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Card } from '../components/_ui/card/card.jsx';
import { Input } from '../components/form/inputs/input/input_comp.jsx';
import { Form_policy } from '../components/form/form_policy.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';
import { Input_textarea } from '../components/form/inputs/input_textarea/input_textarea_comp.jsx';
import { Faq } from '../components/content/faq/faq.jsx';
import { Contacts } from '../components/content/contacts/contacts-comp.jsx';
import { Accommodation } from '../components/content/accomodation/accommodation.jsx';
import { GalleryFull } from '../components/gallery/galleryFull.jsx';
import { Block } from '../components/block/block.jsx';
import { Accordion_full } from '../components/_ui/accordion/accordion-full.jsx';
import { All_cards_advantages } from '../components/_ui/card/all_card.jsx';

export default function Home() {
  return (
    <HeroWithBreadcrumbs meta={metaPages.home} className={'page-fest'}>
      <Block_banner
        banners={[
          {
            title:
              <Block_Head title="фестиваль сакуры" headingSize={'f-h1'} caption="Самое яркое событие этой весны! Тысячи нежно-розовых лепестков, японская музыка, чайные церемонии и атмосфера, в которой хочется остаться навсегда" headingLevel={1}
                          action={<>
                            <Button type="filled-primary" color="brand" icon="icon-ic-uniq-arrow-right">купить
                              билет</Button>
                            <Button type="outlined" color="neutral" icon="icon-ic-uniq-arrow-right">смотреть
                              программу</Button>
                          </>} />,
            imageSrc: '/assets/img/1.jpg',
          },
        ]}
        className={'block_banner-hero'}
      >
      </Block_banner>

      <Block_image_text
        className={'image_text_first_in_fest'}
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={<Block_Head title={'Фестиваль цветущей сакуры'}></Block_Head>}
        reversed={true}
        content={<>
          <p>Это ежегодное событие, которое вновь подарит гостям уникальную возможность насладиться красотой весны и расцвета природы, вдохновиться культурой и традициями востока и почувствовать новые грани эмоций.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Pellentesque eleifend mauris amet ullamcorper mi dui at. </p>
          <img src={'/assets/img/fest/image-text-first-bck.png'} className={'image-text-first-bck'}></img>
        </>}
      />

      <Block className={'block_info_fest'}>
        <div class="block--content">
          <div>
            <img src={'/assets/img/1.jpg'} className={'block_info_fest_first-img'}></img>
            <Block_Head title={'В чем уникальность события?'}></Block_Head>
            <p>Ханами (花見) — древняя японская традиция любования цветением сакуры. В Японии это национальный праздник, символизирующий красоту жизни, её мимолётность и обновление природы.</p>
            <p>Фестиваль сакуры в «Мрии» — это российская версия ханами, которая проходит ежегодно в апреле, когда в саду одновременно расцветают сотни сакур, превращая территорию в облако из нежно-розовых и белых цветов.</p>

          </div>
          <div>
            <img src={'/assets/img/1.jpg'} className={'block_info_fest_second-img'}></img>
          </div>
        </div>
        <div class="block--image">
          <img src={'/assets/img/1.jpg'}></img>
        </div>
      </Block>

      <Block_List className="content_advantages"
                  slider={true}
      >
        <All_cards_advantages/>
      </Block_List>
      <Block_List
        className="content_cards-fest"
        slider={true}
        title={
          <Block_Head
            title={"форматы посещения"}
            subtitle={'訪問形式'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <Card
          title={'ВИП-тариф. Входной билет + ужин в ресторане Теппаньяки'}
          text={
            'Проведите день, полный впечатлений, и завершите его незабываемым гастрономическим перформансом от шеф-повара'
          }
          image={'../../assets/img/1.jpg'}
          link={'/'}
          action={<Button type={'filled-primary'} color={'neutral'} >купить билет</Button>}
        >
        </Card>
        <Card
          title={'Входной билет на фестиваль'}
          text={
            'В билет включено посещение всей территории Японского сада в день фестиваля, участие в программе развлечений по расписанию'
          }
          image={'../../assets/img/1.jpg'}
          link={'/'}
          action={<Button type={'filled-primary'} color={'neutral'}>купить билет</Button>}
        >
        </Card>
        <Card
          title={'ВИП-тариф. Входной билет + ужин в ресторане Теппаньяки'}
          text={
            'Проведите день, полный впечатлений, и завершите его незабываемым гастрономическим перформансом от шеф-повара'
          }
          image={'../../assets/img/1.jpg'}
          link={'/'}
          action={<Button type={'filled-primary'} color={'neutral'} icon={'icon-ic-uniq-arrow-right'}>купить билет</Button>}
        >
        </Card>
      </Block_List>



      <Block
        className={'block_html_code'}
        title={
          <Block_Head
            title={'программа <br> мероприятий'}
            subtitle={'訪問形式'}
            headingLevel={2}
          ></Block_Head>
        }>
        <div class="block--content is_cascade">
          <Accordion_full/>
        </div>
      </Block>

      <Block_List
        className="content_services"
        slider={true}
        title={
          <Block_Head
            title={'услуги'}
            subtitle={'訪問形式'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <>
          <Card
            title={'Чайная церемония'}
            text={'Откройте для себя атмосферу японского гостеприимства через блюда традиционной и современной кухни. В ресторанах и чайных пространствах сада гостей ждут авторские подачи, сезонные ингредиенты, японские десерты и церемониальный чай в окружении природы и спокойствия.'}
            image={'../../assets/img/2.jpg'}
            link={'/'}
          />
          <Card
            title={'активности'}
            text={'Прогулки по саду, экскурсии, чайные церемонии и сезонные события для гостей любого возраста'}
            image={'../../assets/img/2.jpg'}
            link={'/'}
          />
          <Card
            title={'мастер-классы'}
            text={'Познакомьтесь с японскими традициями через каллиграфию, оригами и искусство чайного ритуала'}
            image={'../../assets/img/1.jpg'}
            link={'/'}
          />
          <Card
            title={'Мерч и сувениры'}
            text={'Коллекция японских сувениров, предметов декора и памятных подарков в эстетике сада'}
            image={'../../assets/img/1.jpg'}
            link={'/'}
          />
        </>
      </Block_List>

      <Block>
        <div class="is_cascade">
          <video src="../../assets/video/@lepragram.mp4" controls={true}></video>
        </div>
      </Block>

      <GalleryFull
        title={
          <Block_Head
            title="галерея"
            subtitle="訪問形式"
            headingLevel={2}
          />
        }
        images={[{ src: "/assets/img/1.jpg" },
          { src: "/assets/img/2.jpg" },
          { src: "/assets/img/1.jpg" },
          { src: "/assets/img/2.jpg" },
          { src: "/assets/img/2.jpg" },]}
        isSlider={true}
        showSelection={false}

      />

      <Accommodation></Accommodation>

      <Contacts></Contacts>


      <Faq image={false}></Faq>


      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        ratioFill={true}
        content={
          <form className="form">
            <input type="hidden" value="" name="fields[form]" />
            <input type="hidden" value="" />
            <h3 className="form--title">Не нашли ответ на свой вопрос?</h3>
            <fieldset>
              <Input type={"email"} name={"email"} placeholder={"Ваш e-mail"} required={true} text={"Email"} autocomplete={"email"}></Input>
              <Input_textarea text={"комментарий"} name={"comments"} placeholder={"Введите ваш вопрос..."} rows={"4"} maxLength={"1000"}></Input_textarea>

              <Form_policy></Form_policy>
              <div className="form--button">
                <Button type={'filled-primary'} color={'neutral'} htmlType="submit" disabled="disabled" icon={'icon-ic-uniq-arrow-right'}>Отправить</Button>
              </div>
            </fieldset>
          </form>
        }
      />
    </HeroWithBreadcrumbs>
  );
}
