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
import { GalleryFull } from '../components/gallery/galleryFull.jsx';
import { Faq } from '../components/content/faq/faq.jsx';
import { Input_select } from '../components/form/inputs/input_select/input_select_comp.jsx';
import { Input } from '../components/form/inputs/input/input_comp.jsx';
import { Input_date } from '../components/form/inputs/input_date/input_date_comp.jsx';
import { Input_textarea } from '../components/form/inputs/input_textarea/input_textarea_comp.jsx';
import { Form_policy } from '../components/form/form_policy.jsx';


export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Block_banner
        banners={[
          {
            title: <Block_Head title="аренда кимоно"  headingSize={'f-h1'}  caption="Почувствуйте себя гейшей или самураем, надевая традиционное японское кимоно. Сделайте незабываемые фото в наряде на фоне живописного Сада." action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Купить билет</Button>
            </>} />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
        className={"block_banner-hero"}
      >
        <HeroContent main={false}></HeroContent>
      </Block_banner>

      <Block_image_text className={'block_image_text_ar-4-3'}
                        images={[
                          { src: '../../assets/img/2.jpg' },
                        ]}
                        title={<Block_Head title={'Об аренде'} caption={'Почувствуйте себя гейшей или самураем, надевая традиционное японское кимоно. Сделайте незабываемые фото в наряде на фоне живописного Сада. Аутентичные костюмы помогут надеть сотрудники Сада.'}/>} content={<>
        <p>Рекомендуется быть в одежде, на которую будет удобно надевать кимоно (короткий рукав, открытая зона декольте), обувь, подходящая под образ.</p>
        <ul>
          <li>Специалист поможет правильно надеть кимоно</li>
          <li>Женские, мужские и детские кимоно на выбор</li>
          <li>В стоимость входит тестирование на антиген</li>
        </ul>
        <p>В аренду кимоно включено:</p>
        <ul>
          <li>Переодевание в кимоно </li>
          <li>Фотосессия 1 час </li>
        </ul>

      </>} />

      <Block_List
        className="content_services"
        title={
          <Block_Head
            title={"выберите кимоно"}
            headingLevel={2}
            action={<Button color={'neutral'} type={'outlined'}>смотреть больше в PDF</Button>}
          ></Block_Head>
        }
      >
        <All_card_services />
      </Block_List>
      <GalleryFull
        title={
          <Block_Head
            title="галерея"
            headingLevel={2}
          />
        }
        images={[{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },]}
        isSlider={false}
        group="gallery-grid-triple"
        showSelection={false}
      />

      <Block_image_text
        images={[
          { src: '../../assets/img/img-text-form.png' },
        ]}
        content={
          <>
            <form className="form">
              <div class="form--title">Заявка на услугу</div>
              <fieldset>
                <Input_select
                  text={"Тип экскурсии"}
                  options={[
                    { value: "Выбранная опция 1", text: "Сухой сад камней" },
                    { value: "Выбранная опция 2", text: "Выбранная опция 1" },
                    { value: "Выбранная опция 3", text: "Выбранная опция 3" },
                  ]}
                ></Input_select>
                <Input type={'text'} name={'name'} placeholder={'Иванов Иван Иванович'} required={true} text={'Ваше ФИО'} autocomplete={'autocomplete'}></Input>
                <Input type={'tel'} name={'tel'} placeholder={'+7 999 999-99-99'} required={true} text={'Ваш телефон'} autocomplete={'tel'} inputMode="numeric"></Input>
                <Input type={"email"} name={"email"} placeholder={"example@imperial.ru"} required={true} text={"Ваш e-mail"} autocomplete={"email"}></Input>
                <Input_date
                  text={"выбор даты"}
                  name={""}
                  min={""}
                  max={"2026-10-12"}
                  lang={"ru-RU"}
                />
                <Input_textarea name={"comments"} placeholder={"Введите ваш вопрос..."} rows={"4"} maxLength={"1000"}></Input_textarea>

                <Form_policy></Form_policy>
                <div className="form--button">
                  <Button type={'filled-primary'} color={'neutral'} htmlType="submit" disabled="disabled" icon={'icon-ic-uniq-arrow-right'}>Отправить</Button>
                </div>
              </fieldset>
            </form>
          </>
        }
        centered
      />

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
