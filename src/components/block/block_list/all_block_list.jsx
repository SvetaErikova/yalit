import { Button } from '../../_ui/button/button.jsx';
import {
  All_card_article,
  All_card_default, All_card_offers, All_card_room, All_card_services, All_card_special, All_cards_accommodation,All_card_galleries
} from '../../_ui/card/all_card.jsx';
import { Card } from '../../_ui/card/content/card.jsx';
import { Block_Head } from '../_ui/block--head/block--head.jsx';
import { Block_pagination } from '../_ui/block--pagination/block--pagination.jsx';
import { Block_selection } from '../_ui/block--selection/block--selection-comp.jsx';
import { Block_List } from './block_list.jsx';


export const All_block_list = () => {
  const tabs = [
    { label: 'Все' },
    { label: 'Номера' },
    { label: 'Рестораны и бары' },
    { label: 'Spa и бассейны' },
  ];
  return (
    <>
      {/*Стандартные карточки грид без табов и пагинации*/}
      <Block_List
        className="content_cards"
        title={
          <Block_Head
            title={'Грид'}
            subtitle={'Блок-список стандартный'}
            caption={'Стандартные карточки грид без табов и пагинации'}
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
            title={'Слайдер'}
            subtitle={'Блок-список слайдер'}
            caption={'Стандартные карточки слайдер без табов и пагинации'}
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
          title={'Карточка попап'}
          images={[{ src: '../../assets/img/1.jpg' }]}
          popup={'popup_for_cascade'}
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
            title={'Слайдер'}
            subtitle={'Блок-список слайдер'}
            caption={'Стандартные карточки слайдер без табов и пагинации'}
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
          title={'Карточка попап'}
          images={[{ src: '../../assets/img/1.jpg' }]}
          popup={'popup_for_cascade'}
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
            title={'Слайдер'}
            subtitle={'Блок-список без класса контента'}
            caption={'Стандартные карточки слайдер c табами и пагинации'}
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
          title={'Карточка попап'}
          images={[{ src: '../../assets/img/1.jpg' }]}
          popup={'popup_for_cascade'}
          action={<Button type="tinted" color="neutral" icon={'icon-eye'}></Button>}
        />
      </Block_List>

      {/*Стандартные карточки грид c табами и пагинацей*/}
      <Block_List
        className="content_cards"
        title={
          <Block_Head
            title={'Грид'}
            subtitle={'Блок-список без класса контента '}
            caption={'Стандартные карточки грид c табами и пагинацей'}
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
            title={'Карточки статей'}
            subtitle={'грид'}
            caption={'грид'}
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
            title={'Карточки статей'}
            subtitle={'Слайдер'}
            caption={'Слайдер'}
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

      {/*карточки номеров*/}
      <Block_List
        className="content_rooms"
        title={
          <Block_Head
            title={'Номера'}
            subtitle={'content_rooms'}
            caption={'Номера грид'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_room />
      </Block_List>

      {/*карточки проживания*/}
      <Block_List
        className="content_accommodation"
        title={
          <Block_Head
            title={'Проживание'}
            subtitle={'content_accommodation'}
            caption={'Проживание грид'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_cards_accommodation />
      </Block_List>

      <Block_List
        className="content_accommodation"
        slider={true}
        title={
          <Block_Head
            title={'Проживание'}
            subtitle={'content_accommodation'}
            caption={'Проживание слайдер'}
            headingLevel={2}

          ></Block_Head>
        }
      >
        <All_cards_accommodation />
      </Block_List>

      {/*карточки Услуг*/}
      <Block_List
        className="content_services"
        title={
          <Block_Head
            title={'Услуги'}
            subtitle={'content_services'}
            caption={'Услуги грид'}
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
            title={'Услуги'}
            subtitle={'content_services'}
            caption={'Услуги слайдер'}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_services />
      </Block_List>
      {/*карточки offers*/}
      <Block_List
        className="content_offers"
        title={
          <Block_Head
            title={'Афиша'}
            subtitle={'content_offers'}
            caption={'Offers грид '}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_offers />
      </Block_List>

      {/*карточки special*/}
      <Block_List
        className="content_special"
        title={
          <Block_Head
            title={'Спецпредложения'}
            subtitle={'content_special'}
            caption={'Special грид '}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_special />
      </Block_List>

      {/*карточки special*/}
      <Block_List
        className="content_special"
        slider={true}
        title={
          <Block_Head
            title={'Спецпредложения'}
            subtitle={'content_special'}
            caption={'Special слайдер '}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_special />
        <Card
          title={'Карточка ссылка'}
          text={
            'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'
          }
          image={'../../assets/img/2.jpg'}
          link={'/'}
        />
      </Block_List>
      {/*Карточки категорий*/}
      <Block_List
        className={'content_galleries'}
        title={
          <Block_Head
            title={'Галерея карточки'}
            subtitle={'content_galleries'}
            caption={'Галерея грид '}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_galleries></All_card_galleries>
      </Block_List>
      <Block_List
        className={'content_galleries'}
        slider={true}
        title={
          <Block_Head
            title={'Галерея карточки'}
            subtitle={'content_galleries'}
            caption={'Галерея слайдер '}
            headingLevel={2}
          ></Block_Head>
        }
      >
        <All_card_galleries></All_card_galleries>
      </Block_List>
    </>
  );
};
