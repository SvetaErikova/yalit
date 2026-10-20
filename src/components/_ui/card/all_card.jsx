import { Button } from '../button/button.jsx';
import { Card } from './content/card.jsx';

export { All_cards_accommodation } from './content/accommodation.jsx';
export { All_card_offers } from './content/offers.jsx';
export { All_card_room } from './content/room.jsx';
export { All_card_special } from './content/special.jsx';
export { All_card_services } from './content/service.jsx';
export {All_card_galleries} from './content/galleries.jsx'

export const All_card_default = () => {
  return (<>
      <Card
        title={'Карточка ссылка'}
        text={'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'}
        image={'../../assets/img/2.jpg'}
        link={'/'}
        labels={[{ text: 'Label text' }]}
        action={<Button type={'filled-secondary'} icon={'icon-ic-eye'}></Button>}
      >
      </Card>
      <Card
        title={'Карточка попап c очень очень очень очень очень очень очень очень большим заголовком'}
        text={'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'}
        image={'../../assets/img/2.jpg'}
        popup={'popup_for_cascade'}
        labels={[{ text: 'Label text' }]}
        action={<Button type={'filled-secondary'} icon={'icon-ic-uniq-arrow-right'}></Button>}
      >
      </Card>
      <Card
        title="Карточка не ссылка"
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        labels={[{ text: 'Label text' }]}
      >
      </Card>
      <Card
        title="Карточка не ссылка"
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        labels={[{ text: 'Label text' }]}
      >
      </Card>
    </>);
};

// export const All_card_offers = () => {
//   return (
//     <>
//       <Card
//         title={'Карточка ссылка '}
//         image={'../../assets/img/2.jpg'}
//         link={'/'}
//         labels={['до 28.02.2026']}
//       />
//       <Card
//         title={
//           'Карточка попап c очень очень очень очень очень очень очень очень большим заголовком'
//         }
//         image={'../../assets/img/2.jpg'}
//         popup={'popup_for_cascade'}
//         labels={['до 28.02.2026']}
//       />
//       <Card
//         title="Заголовок в две строки, уходящий в точечки"
//         image={'../../assets/img/1.jpg'}
//       />
//       <Card
//         title="Заголовок в две строки, уходящий в точечки"
//         image={'../../assets/img/1.jpg'}
//       />
//     </>
//   );
// };
export const All_card_article = () => {
  return (<>
      <Card
        title={'Карточка ссылка '}
        text={'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'}
        image={'../../assets/img/2.jpg'}
        action={<><Button type={'filled-accent'}>забронировать</Button><Button type={'outlined'}>подробнее</Button></>}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
      <Card
        title={'Карточка ссылка '}
        text={'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'}
        image={'../../assets/img/2.jpg'}
        action={<><Button type={'filled-accent'}>забронировать</Button><Button type={'outlined'}>подробнее</Button></>}
      >

      </Card>
      <Card
        title={'Карточка ссылка '}
        text={'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'}
        image={'../../assets/img/2.jpg'}
        action={<><Button type={'filled-accent'}>забронировать</Button></>}
      >
      </Card>
      <Card
        title={'Карточка ссылка '}
        text={'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'}
        image={'../../assets/img/2.jpg'}
        link={'/'}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
    </>);
};


export const All_card_events = () => {
  return (<>
      <Card
        image={'../../assets/img/event.jpg'}
        link={'/'}
        action={<Button type={'tinted'} mode={'dark'} color={'neutral'}>Подробнее</Button>}
      />
      <Card
        image={'../../assets/img/event.jpg'}
        link={'/'}
        action={<Button type={'tinted'} mode={'dark'} color={'neutral'}>Подробнее</Button>}
      />
      <Card
        image={'../../assets/img/event.jpg'}
        link={'/'}
        action={<Button type={'tinted'} mode={'dark'} color={'neutral'}>Подробнее</Button>}
      />
      <Card
        image={'../../assets/img/event.jpg'}
        link={'/'}
        action={<Button type={'tinted'} mode={'dark'} color={'neutral'}>Подробнее</Button>}
      />
    </>);
};
export const All_card_job = () => {
  return (<>
      <Card
        link={'/'}
        title="Администратор ресепшн"
        labels={[{ text: 'от 75 000 ₽', icon: 'icon-currrecny', accent: true }, {
          text: 'Полная занятость',
          icon: 'icon-calendar',
        }]}
        text="Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. "
      >
        <div className="card--note">
          <div className="item">
            <span className={'icon-stopwatch'}></span>
            <p> Возможно удалить</p>
          </div>
          <div className="item">
            <span className={'icon-food'}></span>
            <p> График 5/2</p>
          </div>
          <div className="item">
            <span className={'icon-stopwatch'}></span>
            <p> График 5/2</p>
          </div>
        </div>
      </Card>
      <Card
        link={'/'}
        title="Карточка ссылка"
        labels={[{ text: 'Позвонить', icon: 'icon-currrecny', accent: true }, {
          text: 'У моря',
          icon: 'icon-calendar',
        }]}
        text="Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. "
      >
        <div className="card--note">
          <div className="item">
            <span className={'icon-stopwatch'}></span>
            <p> График 5/2</p>
          </div>
          <div className="item">
            <span className={'icon-food'}></span>
            <p> График 5/2</p>
          </div>
          <div className="item">
            <span className={'icon-stopwatch'}></span>
            <p> График 5/2</p>
          </div>
        </div>
      </Card>
      <Card
        link={'/'}
        title="Карточка ссылка"
        labels={[{ text: 'Позвонить', icon: 'icon-currrecny', accent: true }, {
          text: 'У моря',
          icon: 'icon-calendar',
        }]}
        text="Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. "
      >
        <div className="card--note">
          <div className="item">
            <span className={'icon-stopwatch'}></span>
            <p> График 5/2</p>
          </div>
          <div className="item">
            <span className={'icon-food'}></span>
            <p> График 5/2</p>
          </div>
          <div className="item">
            <span className={'icon-stopwatch'}></span>
            <p> График 5/2</p>
          </div>
        </div>
      </Card>
      <Card
        link={'/'}
        title="Карточка ссылка"
        labels={[{ text: 'Позвонить', icon: 'icon-currrecny', accent: true }, {
          text: 'У моря',
          icon: 'icon-calendar',
        }]}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      >
        <div className="card--note">
          <div className="item">
            <span className={'icon-stopwatch'}></span>
            <p> График 5/2</p>
          </div>
          <div className="item">
            <span className={'icon-food'}></span>
            <p> График 5/2</p>
          </div>
          <div className="item">
            <span className={'icon-stopwatch'}></span>
            <p> График 5/2</p>
          </div>
        </div>
      </Card>
    </>);
};

