import { Button } from "../../_ui/button/button.jsx";
import {
  All_card_article,
  All_card_default, All_card_events, All_card_offers, All_card_services,
  All_card_reviews, All_card_tariff, All_cards_accommodation, All_cards_advantages, All_cards_docs, All_cards_special,
} from '../../_ui/card/all_card.jsx';
import { Card } from "../../_ui/card/card.jsx";
import {Block_Head} from "../_ui/block--head/block--head.jsx";
import {Block_pagination} from "../_ui/block--pagination/block--pagination.jsx";
import {Block_selection} from "../_ui/block--selection/block--selection-comp.jsx";
import {Block_List} from "./block_list.jsx";

export const All_block_list = () => {
  const tabs = [
    { label: "Все" },
    { label: "Номера" },
    { label: "Рестораны и бары" },
    { label: "Spa и бассейны" }
  ];
  return (
    <>
      {/*Стандартные карточки грид без табов и пагинации*/}
      <Block_List
        className="content_cards"
        title={
          <Block_Head
            title={"Грид"}
            subtitle={"Блок-список стандартный"}
            caption={"Стандартные карточки грид без табов и пагинации"}
            headingLevel={2}
            action={
              <>
                <Button type="filled-primary" color="neutral">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
      >
        <All_card_default></All_card_default>
      </Block_List>
      <br></br>


      {/*Стандартные карточки слайдер без табов и пагинации*/}
      <Block_List
        className="block_list-slider  content_cards"
        title={
          <Block_Head
            title={"Слайдер"}
            subtitle={"Блок-список слайдер"}
            caption={"Стандартные карточки слайдер без табов и пагинации"}
            headingLevel={2}
            action={
              <>
                <Button type="filled-primary" color="neutral">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
      >
        <All_card_default></All_card_default>

        <Card
          title={"Карточка попап"}
          images={[{src: "../../assets/img/1.jpg"}]}
          popup={"popup_for_cascade"}
          action={
            <Button icon={'icon-file'} className={'button-arrow button-dark'} />
          }
        />
      </Block_List>

      {/*Стандартные карточки на 3 колонки*/}
      <Block_List
        className="content_cards -col-3"
        slider={true}
        title={
          <Block_Head
            title={"Слайдер"}
            subtitle={"Блок-список слайдер"}
            caption={"Стандартные карточки слайдер без табов и пагинации"}
            headingLevel={2}

            action={
              <>
                <Button type="filled-primary" color="neutral">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
      >
        <All_card_default></All_card_default>

        <Card
          title={"Карточка попап"}
          images={[{src: "../../assets/img/1.jpg"}]}
          popup={"popup_for_cascade"}
          action={
            <Button icon={'icon-file'} className={'button-arrow button-dark'} />
          }
        />
      </Block_List>

      {/*Стандартные карточки слайдер c табами , пагинацием и фоильтром*/}
      <Block_List
        className="block_list-slider content_cards"
        title={
          <Block_Head
            title={"Слайдер"}
            subtitle={"Блок-список без класса контента"}
            caption={"Стандартные карточки слайдер c табами и пагинации"}
            headingLevel={2}
            action={
              <>
                <Button type="filled-primary" color="neutral">Кнопка 1</Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
        link={true}
        selection={<Block_selection tabs={tabs}></Block_selection>}
        pagination={<Block_pagination page={false}></Block_pagination>}
      >
        <All_card_default></All_card_default>
        <Card
          title={"Карточка попап"}
          images={[{src: "../../assets/img/1.jpg"}]}
          popup={"popup_for_cascade"}
          action={<Button type="tinted" color="neutral" icon={"icon-eye"}></Button>}
        />
      </Block_List>

      {/*Стандартные карточки грид c табами и пагинацей*/}
      <Block_List
        className="content_cards"
        title={
          <Block_Head
            title={"Грид"}
            subtitle={"Блок-список без класса контента "}
            caption={"Стандартные карточки грид c табами и пагинацей"}
            headingLevel={2}
            action={
              <>
                <Button type="filled-primary" color="neutral">Кнопка 1</Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
        selection={<Block_selection tabs={tabs}></Block_selection>}
        pagination={<Block_pagination page={true}></Block_pagination>}
      >
        <All_card_default></All_card_default>
      </Block_List>

      {/*Карточки статей*/}
      <Block_List
        className="content_article"
        title={
          <Block_Head
            title={"Карточки статей"}
            subtitle={"грид"}
            caption={"грид"}
            headingLevel={2}
            action={
              <>
                <Button type="filled-primary" color="neutral">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }>
        <All_card_article />
      </Block_List>
      <Block_List
        className="content_article"
        slider={true}
        title={
          <Block_Head
            title={"Карточки статей"}
            subtitle={"Слайдер"}
            caption={"Слайдер"}
            headingLevel={2}
            action={
              <>
                <Button type="filled-primary" color="neutral">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }>
        <All_card_article />
      </Block_List>

      <br></br>
      {/*карточки Тарифов*/}
      <Block_List
        className="content_tariffs"
        title={
          <Block_Head
            title={"Тарифы"}
            subtitle={"content_tariffs"}
            caption={"Тарифы грид "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_tariff />
      </Block_List>
      {/*карточки Тарифов*/}
      <Block_List
        className="content_tariffs"
        slider={true}
        title={
          <Block_Head
            title={"Тарифы"}
            subtitle={"content_tariffs"}
            caption={"Тарифы слайдер "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_tariff />
      </Block_List>
      {/*карточки Документов*/}
      <Block_List
        className="content_docs"
        title={
          <Block_Head
            title={"Документы"}
            subtitle={"content_docs"}
            caption={"Документы грид"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_cards_docs />
      </Block_List>
      {/*карточки Услуг*/}
      <Block_List
        className="content_services"
        title={
          <Block_Head
            title={"Услуги"}
            subtitle={"content_services"}
            caption={"Услуги грид"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services />
      </Block_List>
      {/*карточки Услуг*/}
      <Block_List
        className="content_services"
        slider={true}
        title={
          <Block_Head
            title={"Услуги"}
            subtitle={"content_services"}
            caption={"Услуги слайдер"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services />
      </Block_List>
    {/*карточки Акций*/}
      <Block_List
        className="content_offers"
        title={
          <Block_Head
            title={"Акции"}
            subtitle={"content_offers"}
            caption={"Акции грид "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_offers />
      </Block_List>

      {/*карточки Акций*/}
      <Block_List
        className="content_offers"
        slider={true}
        title={
          <Block_Head
            title={"Акции"}
            subtitle={"content_offers"}
            caption={"Акции слайдер "}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_offers />
        <Card
          title={"Карточка ссылка"}
          text={
            "In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex"
          }
          image={"../../assets/img/2.jpg"}
          link={"/"}
        />
      </Block_List>
      {/*Карточки преимуществ*/}
      <Block_List className="content_advantages"
      title={
        <Block_Head
          title='content_advantages'
          headingLevel={2}
        />}
      >
        <All_cards_advantages/>
      </Block_List>

      <Block_List
            className="content_reviews"
            selection={<Block_selection tabs={tabs}></Block_selection>}
            title={
              <Block_Head
                title={"Грид"}
                ubtitle={"Блок-список "}
            caption={"Карточки отзывов"}
            headingLevel={2}
            action={
              <>
                <Button type="filled-primary" color="neutral">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
      >

        <All_card_reviews></All_card_reviews>
      </Block_List>

      <Block_List
        className="content_reviews"
        selection={<Block_selection tabs={tabs}></Block_selection>}
        slider={true}
        title={
          <Block_Head
            title={"Слайдер"}
            subtitle={"Блок-список "}
            caption={"Карточки отзывов"}
            headingLevel={2}
            action={
              <>
                <Button type="filled-primary" color="neutral">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
      >

        <All_card_reviews></All_card_reviews>
      </Block_List>
      <Block_List
        className="content_special"
        title={
          <Block_Head
            title={"Специальные"}
            subtitle={"content_special"}
            caption={"Специальные грид"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_cards_special />
      </Block_List>
      <Block_List
        className="content_special"
        slider={true}
        title={
          <Block_Head
            title={"Специальные"}
            subtitle={"content_special"}
            caption={"Специальные слайдер"}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_cards_special />
      </Block_List>

    {/*  Карточки на стра фестиваля */}
      <Block_List
        className="content_cards-fest"
        slider={true}
        title={
          <Block_Head
            title={"Карточки для стр фестиваля"}
            headingLevel={2}
            action={
              <>
                <Button type="filled-primary" color="neutral">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="outlined" color="neutral">Кнопка 2</Button>
              </>
            }
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
          action={<Button type={'filled-primary'} color={'neutral'}>купить билет</Button>}
        >
        </Card>
      </Block_List>

    </>
  );
};
