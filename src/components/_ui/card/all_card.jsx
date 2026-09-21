import { Button } from '../button/button.jsx';
import {Card, Card_accommodation, Card_doc, Card_offers, Card_reviews} from './card.jsx';

const REVIEW_CARD_TEXT = (
  <>
    <p>Японский сад — оазис спокойствия в шумном городе!</p>
    <p>
      Была здесь в выходные с семьёй, и это просто волшебное место! Честно, не ожидала найти такой
      аутентичный японский сад у нас.
    </p>
    <p>Что понравилось:</p>
    <ul>
      <li>Невероятно ухоженная территория — каждый камушек на своём месте</li>
      <li>Карпы кои в пруду — дети были в восторге, можно покормить</li>
      <li>Беседки для медитации с видом на водопад</li>
      <li>Сакура цвела потрясающе (были в апреле)</li>
      <li>Чайная церемония — интересный опыт, хоть и недёшево…</li>
    </ul>
    <p>Что понравилось:</p>
    <ul>
      <li>Невероятно ухоженная территория — каждый камушек на своём месте</li>
      <li>Карпы кои в пруду — дети были в восторге, можно покормить</li>
      <li>Беседки для медитации с видом на водопад</li>
      <li>Сакура цвела потрясающе (были в апреле)</li>
    </ul>
    <p>Чайная церемония — интересный опыт, хоть и недёшево…</p>
  </>
);

export const All_card_default = () => {
  return (
    <>
      <Card
        title={'Карточка ссылка'}
        text={
          'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'
        }
        image={'../../assets/img/2.jpg'}
        link={'/'}
        labels={[{ text: 'Label text' }]}
        action={<Button type={'outlined'} color={'neutral'} icon={'icon-ic-uniq-arrow-right'}></Button>}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
      <Card
        title={'Карточка попап c очень очень очень очень очень очень очень очень большим заголовком'}
        text={
          'In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex'
        }
        image={'../../assets/img/2.jpg'}
        popup={'popup_for_cascade'}
        labels={[{ text: 'Label text' }]}
        action={<Button type={'outlined'} color={'neutral'} icon={'icon-ic-eye'}></Button>}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
      <Card
        title="Карточка не ссылка"
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        labels={[{ text: 'Label text' }]}
        action={<Button type={'outlined'} color={'neutral'} icon={'icon-ic-uniq-arrow-right'}></Button>}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
      <Card
        title="Карточка не ссылка"
        image={'../../assets/img/1.jpg'}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        labels={[{ text: 'Label text' }]}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
    </>
  );
};

export const All_card_services = () => {
  return (
    <>
      <Card
        title={'Чайная церемония'}
        text={'Погружение в японскую традицию с мастером церемонии, ароматным чаем и спокойной атмосферой сада.'}
        image={'../../assets/img/2.jpg'}
        link={'/'}
        price={'от 1 500 ₽'}
      />
      <Card
        title={'Индивидуальная экскурсия'}
        text={'Персональная прогулка по саду с гидом, историями о символике пространства и редких растениях.'}
        image={'../../assets/img/1.jpg'}
        link={'/'}
        price={'от 3 000 ₽'}
      />
      <Card
        title={'Мастер-класс по каллиграфии'}
        text={'Практическое занятие по основам японской каллиграфии с материалами и сопровождением мастера.'}
        image={'../../assets/img/2.jpg'}
        link={'/'}
        price={'от 2 200 ₽'}
      />
      <Card
        title={'Фотосессия в саду'}
        text={'Прогулка по самым живописным маршрутам сада с профессиональным фотографом и готовыми кадрами.'}
        image={'../../assets/img/1.jpg'}
        link={'/'}
        price={'от 5 000 ₽'}
      />
    </>
  );
};

export const All_card_offers = () => {
  return (
    <>
      <Card_offers
        title={'Фестиваль «цветущая сакура»'}
        text={'Фестиваль цветущей сакуры  — это праздник для всей семьи, где каждый может найти что-то особенное — от прогулок под цветущими деревьями до участия в мастер-классах и дегустациях стрит-фуда. Насыщенная программа дня подарит впечатления и новые эмоции.'}
        image={'../../assets/img/2.jpg'}
        date={'18-19 апреля'}
        action={<Button type={'flat'} icon={'icon-ic-uniq-arrow-right'}>зарегистрироваться</Button>}
      />
      <Card_offers
        title={'Фестиваль «цветущая сакура»'}
        text={'Окунитесь в атмосферу настоящей Японии на фестивале рыб Кои в саду «Мрия» — яркие кои, древние легенды, музыка кото, аромат чая и сотни огней на воде ждут вас !'}
        image={'../../assets/img/2.jpg'}
        date={'ежедневно'}
        action={<Button type={'flat'} icon={'icon-ic-uniq-arrow-right'}>зарегистрироваться</Button>}

      />
      <Card_offers
        title="Фестиваль «цветущая сакура»"
        text={'Фестиваль проходит в Японском саду «Мрия» — покормите кои с рук, загадайте желание, насладитесь чайной церемонией и волшебным вечерним шоу фонарей на воде.'}
        image={'../../assets/img/1.jpg'}
        action={<Button type={'flat'} icon={'icon-ic-uniq-arrow-right'}>зарегистрироваться</Button>}
        date={'20 апреля'}
      />
      <Card_offers
        title="Фестиваль «цветущая сакура»"
        text={'Фестиваль проходит в Японском саду «Мрия» — покормите кои с рук, загадайте желание, насладитесь чайной церемонией и волшебным вечерним шоу фонарей на воде.'}
        image={'../../assets/img/1.jpg'}
        action={<Button type={'flat'} icon={'icon-ic-uniq-arrow-right'}>зарегистрироваться</Button>}
        date={'20 апреля'}
      />
    </>
  );
};

export const All_card_tariff = () => {
  return (
    <>
      <Card title={'Многодетная семья'}
      action={<Button type={'outlined'} color={'neutral'} icon={'icon-ic-eye'}></Button>}>
        <div className={'card--tariff'}>
          <div className="card--tariff_list">
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Для всей семьи</span>
            </div>
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>При предъявлении удостоверения</span>
            </div>
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Покупка в кассе сада</span>
            </div>
          </div>
          <div className={'card--tariff_price'}>4 000 ₽</div>
        </div>
      </Card>
      <Card title={'Пенсионеры'} action={<Button type={'outlined'} color={'neutral'} icon={'icon-ic-uniq-arrow-right'}></Button>}>
        <div className={'card--tariff'}>
          <div className="card--tariff_list">
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Льготный билет</span>
            </div>
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Доступ ко всем прогулочным зонам </span>
            </div>
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>При предъявлении пенсионного удостоверения</span>
            </div>
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Покупка в кассе сада</span>
            </div>
          </div>
          <div className={'card--tariff_price'}>4 000 ₽</div>
        </div>
      </Card>
      <Card title={'Именинник'}>
        <div className={'card--tariff'}>
          <div className="card--tariff_list">
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Спецтариф в день рождения</span>
            </div>
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Действует 3 дня до и после даты</span>
            </div>
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Покупка в кассе сада</span>
            </div>
          </div>
          <div className={'card--tariff_price'}>4 000 ₽</div>
        </div>
      </Card>
      <Card title={'Инвалиды 1,2 группы'}>
        <div className={'card--tariff'}>
          <div className="card--tariff_list">
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Льготное посещение</span>
            </div>
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Сопровождающий — по отдельному тарифу</span>
            </div>
            <div className="item">
              <span className={'icon-ic-done'}></span>
              <span>Покупка в кассе сада</span>
            </div>
          </div>
          <div className={'card--tariff_price'}>4 000 ₽</div>
        </div>
      </Card>
    </>
  );
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
  return (
    <>
      <Card
        title={'Карточка ссылка '}
        text={
          'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'
        }
        image={'../../assets/img/2.jpg'}
        link={'/'}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
      <Card
        title={'Карточка ссылка '}
        text={
          'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'
        }
        image={'../../assets/img/2.jpg'}
        link={'/'}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
      <Card
        title={'Карточка ссылка '}
        text={
          'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'
        }
        image={'../../assets/img/2.jpg'}
        link={'/'}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
      <Card
        title={'Карточка ссылка '}
        text={
          'Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало'
        }
        image={'../../assets/img/2.jpg'}
        link={'/'}
      >
        <div className={'card--captions'}>
          <span>Статья</span>
          <span className="icon-dot"></span>
          <span>15.06.2026</span>
        </div>
      </Card>
    </>
  );
};

export const All_card_events = () => {
  return (
    <>
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
    </>
  );
};
export const All_card_job = () => {
  return (
    <>
      <Card
        link={'/'}
        title="Администратор ресепшн"
        labels={[
          { text: 'от 75 000 ₽', icon: 'icon-currrecny', accent: true },
          { text: 'Полная занятость', icon: 'icon-calendar' },
        ]}
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
        labels={[
          { text: 'Позвонить', icon: 'icon-currrecny', accent: true },
          { text: 'У моря', icon: 'icon-calendar' },
        ]}
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
        labels={[
          { text: 'Позвонить', icon: 'icon-currrecny', accent: true },
          { text: 'У моря', icon: 'icon-calendar' },
        ]}
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
        labels={[
          { text: 'Позвонить', icon: 'icon-currrecny', accent: true },
          { text: 'У моря', icon: 'icon-calendar' },
        ]}
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
    </>
  );
};

export const All_card_reviews = () => {
  return (
    <>
      <svg style="position: absolute; pointer-events: none;" viewBox="0 0 32 32" width="0" height="0">
        <defs>
          <linearGradient id="active_stars" x1="0" x2="100%" y1="0" y2="0">
            <stop offset="0%" stop-color="" ></stop>
            <stop offset="100%" stop-color="" ></stop>
          </linearGradient>
          <mask id="stars-mask">
            <use xlink:href="#star" x="0"></use>
            <use xlink:href="#star" x="32"></use>
            <use xlink:href="#star" x="64"></use>
            <use xlink:href="#star" x="96"></use>
            <use xlink:href="#star" x="128"></use>
          </mask>
          <symbol viewBox="0 0 26 26" id="star">
            <path d="M12.3633 0L15.282 8.98278H24.727L17.0858 14.5344L20.0045 23.5172L12.3633 17.9656L4.72207 23.5172L7.64075 14.5344L-0.000452995 8.98278H9.4446L12.3633 0Z" fill="#fff"/>
          </symbol>
        </defs>
      </svg>
      <Card_reviews
        authorName="Андрей Сорокин"
        rating={5}
        sourceLabel={'/assets/img/reviews/ostrovok.svg'}
        text={<> <p>Японский сад — оазис спокойствия в шумном городе!</p>
          <p>
            Была здесь в выходные с семьёй, и это просто волшебное место! Честно, не ожидала найти такой
            аутентичный японский сад у нас.
          </p></>}
      />
      <Card_reviews
        authorName="Мария Иванова"
        rating={4}
        text={REVIEW_CARD_TEXT}
      />
      <Card_reviews
        authorName="Иван Петров"
        rating={5}
        text={REVIEW_CARD_TEXT}
      />
      <Card_reviews
        authorName="Елена Сидорова"
        rating={3}
        text={REVIEW_CARD_TEXT}
      />
      <Card_reviews
        authorName="Дмитрий Козлов"
        rating={5}
        text={REVIEW_CARD_TEXT}
      />
    </>
  );
};

export const All_cards_docs = () => {
  return (
    <>
      <Card_doc
        title="Пользовательское соглашение"
        text=""

      />
      <Card_doc
        title="Правила пребывания в саду"
        text="Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. "
      />
      <Card_doc
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. Lacus tortor cursus ut volutpat ut aliquam non. "
      />
      <Card_doc
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. "
      />
      <Card_doc
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. "
      />
    </>
  );
};

export const All_cards_accommodation = () => {
  return (
    <>
      <Card_accommodation
        discountPopup={true}
        discount={true}
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. "
      >
        <div className="is_cascade">
          <div className="list-table">
            <div className="item">
              <p>Время работы</p>
              <span>Ежедневно с 07:00 до 22:00</span>
            </div>
            <div className="item">
              <p>left value</p>
              <span>right value</span>
            </div>
          </div>
        </div>
        <div className="tags">
          <div className="tags--item">
            <span className="icon-beds"></span> 50 m2
          </div>
          <div className="tags--item">
            <span className="icon-guests"></span> до 4
          </div>
          <div className="tags--item">
            <span className="icon-bed"></span> 2 двуспальные
          </div>
          <div className="tags--item">
            <span className="icon-eye-1"></span> Море, парк
          </div>
        </div>
      </Card_accommodation>
      <Card_accommodation
        title="Название документа "
        text="Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. "
        link="/"
      />
      <Card_accommodation
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. Lacus tortor cursus ut volutpat ut aliquam non. "
        link="/"
      />
      <Card_accommodation
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. "
        link="/"
      />
      <Card_accommodation
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. "
        link="/"
      />
    </>
  );
};


export const All_cards_advantages = () => {
  return (
    <>
      <Card
        title="цветущая   сакура"
        image="/../../assets/img/sticker/1.svg"
      />
      <Card
        title="чайные медитации"
        image="/../../assets/img/sticker/1.svg"
      />
      <Card
        title="горячие     купели"
        image="/../../assets/img/sticker/1.svg"
      />
      <Card
        title="чайные церемонии"
        image="/../../assets/img/sticker/1.svg"
      />
      <Card
        title="чайные церемонии"
        image="/../../assets/img/sticker/1.svg"
      />
      <Card
        title="зона гастрономии"
        image="/../../assets/img/sticker/1.svg"
      />
    </>
  );
};
