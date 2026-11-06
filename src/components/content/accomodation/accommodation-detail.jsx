import { Block } from '../../block/block.jsx';
import { Gallery } from '../../gallery/gallery-comp.jsx';
import { Button } from '../../_ui/button/button.jsx';
import { Block_List } from '../../block/block_list/block_list.jsx';
import { Block_Head } from '../../block/_ui/block--head/block--head.jsx';
import { All_card_default } from '../../_ui/card/all_card.jsx';
import { Booking } from '../../booking/booking-comp.jsx';
import { Decor } from '../custom/decor/decor.jsx';

export const AccommodationDetails = () => {
  return (
    <Block className={'block-detail content_accommodation'}>
      <div class={'accommodation_content is_cascade'}>
        <h2>О номере</h2>
        <div className="info-card">
          <div className="item">
            <span className="icon-ic-search"></span>
            <p>25-32 м2</p>
          </div>
          <div className="item">
            <span className="icon-ic-search"></span>
            <p>25-32 м2</p>
          </div>
          <div className="item">
            <span className="icon-ic-search"></span>
            <p>25-32 м2</p>
          </div>
        </div>
        <p>Стандартный номер, вид из которого открывается на город, во внутренний двор отеля или на соседнее прилегающее
          здание. Для вас: Wi-Fi, система кондиционирования, Яндекс ТВ. Для комфортного отдыха двуспальная кровать с
          ортопедическим матрасом и гипоаллергенным бельём. Рабочая зона с чайной станцией, мини-баром, бутилированной
          водой и сейфом. В ванной комнате тропический душ, комплектация: халаты, тапочки, косметический набор и на
          выбор косметика Lucio Classic и Lucio Amber Wood.</p>
        <h3>Оснащение номера</h3>
        <div className="accommodation--info">
          <div className="accommodation--info_item">
            <span className="icon-user"></span>
            <span>Бесплатный завтрак</span>
          </div>
          <div className="accommodation--info_item">
            <span className="icon-user"></span>
            <span>Бесплатный завтрак</span>
          </div>
          <div className="accommodation--info_item">
            <span className="icon-user"></span>
            <span>Бесплатный завтрак</span>
          </div>
          <div className="accommodation--info_item">
            <span className="icon-user"></span>
            <span>Бесплатный завтрак</span>
          </div>
          <div className="accommodation--info_item">
            <span className="icon-user"></span>
            <span>Бесплатный завтрак</span>
          </div>
          <div className="accommodation--info_item">
            <span className="icon-user"></span>
            <span>Бесплатный завтрак</span>
          </div>
          <div className="accommodation--info_item">
            <span className="icon-user"></span>
            <span>Бесплатный завтрак</span>
          </div>
        </div>
        <Button type={'filled-primary'} popup={'popup_for_room_advantages'}>Смотреть все</Button>
        <h3>Комплементарно для гостей</h3>
        <div className="advantages-cards">
          <div className="card">
            <div className="card--image">
              <img src="/assets/img/1.jpg" alt="" />
            </div>
            <div className="card--content">
              <div className="card--title"> Посещение спа-зоны</div>
              <Button type={'filled-secondary'} icon={'icon-ic-eye'}></Button>
            </div>
          </div>
          <div className="card">
            <div className="card--image">
              <img src="/assets/img/1.jpg" alt="" />
            </div>
            <div className="card--content">
              <div className="card--title"> Посещение спа-зоны</div>
              <Button type={'filled-secondary'} icon={'icon-ic-eye'}></Button>
            </div>
          </div>
          <div className="card">
            <div className="card--image">
              <img src="/assets/img/1.jpg" alt="" />
            </div>
            <div className="card--content">
              <div className="card--title"> Посещение спа-зоны</div>
              <Button type={'filled-secondary'} icon={'icon-ic-eye'}></Button>
            </div>
          </div>
        </div>

      </div>
      <div class={'accommodation_sidebar'}>
        <div className="accommodation_sidebar--sticky">
          <Decor />
          <div class="price">
            <p>от 25 000 Р</p>
            <span>За ночь</span>
          </div>
          <Booking></Booking>

        </div>
      </div>
    </Block>
  );
};
