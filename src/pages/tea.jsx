import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Creator } from '../components/content/custom/creator/creator.jsx';
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
import { Input } from '../components/form/inputs/input/input_comp.jsx';
import { Form_policy } from '../components/form/form_policy.jsx';
import { Input_select } from '../components/form/inputs/input_select/input_select_comp.jsx';
import { Input_date } from '../components/form/inputs/input_date/input_date_comp.jsx';
import { Input_textarea } from '../components/form/inputs/input_textarea/input_textarea_comp.jsx';


export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Block_banner
        banners={[
          {
            title:
              <Block_Head title="чайные церемонии" headingSize={'f-h1'} caption="Чаепитие — это древняя традиция, целью которой является остановка внутреннего диалога и повышения осознанности. Всё это актуально и для современного человека." action={<>
                <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Купить билет</Button>
              </>} />,
            imageSrc: '/assets/img/1.jpg',
          },
        ]}
        className={'block_banner-hero'}
      >
        <HeroContent main={false}></HeroContent>
      </Block_banner>
      <VerticalCards />
      <Block_List
        className="content_services"
        slider={true}
        title={
          <Block_Head
            title={"виды церемоний"}
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
            title={'спецпредложения'}
            subtitle={'特別オファー'}
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
            title={'Афиша'}
            subtitle={'ポスター'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_offers />
      </Block_List>

      <Faq image={true}></Faq>

      <Block_image_text
        images={[
          { src: '../../assets/img/img-text-form.png' },
        ]}
        content={
          <>
            <h3>Заявка на услугу</h3>
            <form className="form">
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

      <Block_List
        className="content_services"
        link={true}
        title={
          <Block_Head
            title={'форматы посещения'}
            subtitle={'訪問形式'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services />
      </Block_List>
    </HeroLayout>
  );
}
