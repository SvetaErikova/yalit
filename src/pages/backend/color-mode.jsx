import MainLayout from '../../layouts/MainLoyout.jsx';
import { metaPages } from '../../shared/meta-pages.js';
import { Block_List } from '../../components/block/block_list/block_list.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';
import { Button } from '../../components/_ui/button/button.jsx';
import { All_card_default } from '../../components/_ui/card/all_card.jsx';

export default function Home() {
  return (
    <MainLayout meta={metaPages.home} colorMode={''} >
      <Block_List
        className="content_cards"
        title={
          <Block_Head
            title={"Грид"}
            subtitle={"дефолт фон"}
            caption={"Стандартные карточки грид без табов и пагинации"}
            headingLevel={2}
            action={
              <>
                <Button type="filled" color="brand">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="tinted" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
      >
        <All_card_default></All_card_default>
      </Block_List>
      <Block_List
        className="content_cards dark-mode"
        title={
          <Block_Head
            title={"Грид"}
            subtitle={"Темный фон"}
            caption={"Стандартные карточки грид без табов и пагинации"}
            headingLevel={2}
            action={
              <>
                <Button type="filled" color="brand">
                  <span>Кнопка 1</span>
                </Button>
                <Button type="tinted" color="neutral">Кнопка 2</Button>
              </>
            }
          ></Block_Head>
        }
      >
        <All_card_default></All_card_default>
      </Block_List>

    </MainLayout>
  );
}
