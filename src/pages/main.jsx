import HeroLayout from '../layouts/HeroLayout.jsx';
import { metaPages } from '../shared/meta-pages';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';
import { All_card_offers, All_card_services } from '../components/_ui/card/all_card.jsx';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import { Accommodation } from '../components/content/accomodation/accommodation.jsx';
import { Block_image_text } from '../components/block/block_image_text/block_image_text.jsx';
import { Faq } from '../components/content/faq/faq.jsx';
import { Input } from '../components/form/inputs/input/input_comp.jsx';
import { Form_policy } from '../components/form/form_policy.jsx';
import { Input_textarea } from '../components/form/inputs/input_textarea/input_textarea_comp.jsx';


export default function Home() {
  return (
    <HeroLayout meta={metaPages.home} className={'page-main'}>
      <Block_banner
        banners={[
          {
            title: <Block_Head title="Философия красоты, воплощённая в саду"  headingSize={'f-h1'}  caption="Один из самых больших японских садов на европейском континенте, разбитый на склонах между крымскими горами и морем, на территории курорта «Мрия» в Крыму" headingLevel={1} action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Купить билет</Button>
            </>} />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
        className={"block_banner-hero"}
      >
      </Block_banner>
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

      <Accommodation></Accommodation>
      <Faq image={false}></Faq>
      <Block_image_text
        ratioFill={true}

        images={[{src: "/assets/img/1.jpg"}]}
        content={        <>
          <h3>Не нашли ответ на свой вопрос?</h3>
          <form className="form">
            <fieldset>
              <Input name={"email"} type={'email'} placeholder={"Ваш e-mail"} required={true} autocomplete={"autocomplete"}></Input>
              <Input_textarea text={"комментарий"} name={"comments"} placeholder={"Введите комментарий"} rows={"4"} maxLength={"1000"}></Input_textarea>

            </fieldset>
            <Form_policy></Form_policy>
            <div className="form--button">
              <Button type={'filled'} color={'primary'} htmlType="submit" disabled="disabled" icon={'icon-ic-uniq-arrow-right'}>Отправить</Button>
            </div>
          </form>
        </>}
      />
    </HeroLayout>
  );
}
