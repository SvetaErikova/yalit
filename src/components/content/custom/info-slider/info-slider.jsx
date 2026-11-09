import { Block } from '../../../block/block.jsx';
import { Button } from '../../../_ui/button/button.jsx';

const cards = [
  {
    title: ['заголовок в две', 'строки'],
    image: '/assets/img/1.jpg',
    text: 'Отель располагается в легендарном Доме печати на улице Баумана — памятнике архитектуры 1930-х годов, ярком образце советского конструктивизма, в котором собрана история: отсюда за несколько минут можно дойти до большинства достопримечательностей Казани. Здесь вы главный герой сюжетной линии города, который можно буквально ощутить и прочувствовать всем сердцем.',
  },
  {
    title: ['три ресторана', 'одного дома'],
    image: '/assets/img/2.jpg',
    text: 'В доме работают три ресторана, и у каждого свой ритм: деловой обед, тихий ужин и праздник, который занимает весь зал. Панорамные окна оставляют Казань в кадре, а кухню можно закрыть только для своих.',
  },
  {
    title: ['залы для встреч', 'и праздников'],
    image: '/assets/img/info-clip/bg.jpg',
    text: 'Конференц-залы и переговорные собраны в том же доме: свет, тишина и техника для презентаций. После встречи до центра несколько минут пешком — город начинается сразу за дверью.',
  },
  {
    title: ['номера с видом', 'на город'],
    image: '/assets/img/2.jpg',
    text: 'Номера смотрят на улицу Баумана и на внутренний двор дома 1930-х. Утром город остаётся за окном, а вечером Казань читается как продолжение интерьера.',
  },
];

const CardActions = () => (
  <div class="card--action" data-anim="ctn">
    <Button type={'filled-accent'}>подробнее</Button>
    <Button type={'filled-primary'}>смотреть 3d тур</Button>
  </div>
);

export const InfoSlider = () => {
  return (
    <Block className={'info-slider'}>
      <div class="info-slider_decor"></div>
      <div class="block--elements">
        <div class="info-slider--titles">
          {cards.map((card, index) => (
            <div class={`card--title${index === 0 ? ' is-active' : ''}`} key={card.title.join('-')}>
              <h2 class="card--title_text" data-anim="h" aria-label={`${card.title[0]} ${card.title[1]}`}>{card.title[0]}<br />{card.title[1]}</h2>
            </div>
          ))}
        </div>

        <div class="info-slider--images">
          {cards.map((card, index) => (
            <div class={`card--image${index === 0 ? ' is-active' : ''}`} data-anim="img" key={card.title.join('-')}>
              <img src={card.image} alt="" />
            </div>
          ))}
        </div>

        <div class="info-slider--controls">
          <button class="info-slider--nav info-slider--prev" type="button" data-prev aria-label="Предыдущая карточка">
            <span class="icon-ic-chevron-left" aria-hidden="true"></span>
            <span data-current>1</span>
          </button>
          <span class="info-slider--line" aria-hidden="true">
            <span class="info-slider--line_fill" data-progress></span>
          </span>
          <button class="info-slider--nav info-slider--next" type="button" data-next aria-label="Следующая карточка">
            <span data-total>{cards.length}</span>
            <span class="icon-ic-chevron-right" aria-hidden="true"></span>
          </button>
        </div>

        <div class="info-slider--copies">
          {cards.map((card, index) => (
            <div class={`card--copy${index === 0 ? ' is-active' : ''}`} key={card.title.join('-')}>
              <p class="card--text" data-anim="p">{card.text}</p>
              <CardActions />
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
};
