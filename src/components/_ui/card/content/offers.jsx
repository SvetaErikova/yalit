import { Button } from '../../button/button.jsx';
import { Card_list } from './card.jsx';

const offersPrice = {
  value: 'От 800 ₽',
  text: '/ персона (сет-меню)',
};

const offersList = [
  { title: 'Дата:', text: 'Среда - Суббота - Воскресенье' },
  { title: 'Время:', text: '10:00' },
  { title: 'Длительность:', text: '2,5 часа' },
];

export const Card_offers = ({ image, title, text, action, list, price }) => {
  return (
    <a href='/' className={'card'}>
      <div class="card--image">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div class="card--content">
        <div class="card--top">
          <div class="card--title">{title}</div>
          {text && <div className={'card--text'}>{text}</div>}
        </div>
        <Card_list list={list} />
        <div class="card--bottom">
          {price && (
            <div className="card--price">
              {price.value && <span className="card--price_value">{price.value}</span>}
              {price.text && <span className="card--price_text">{price.text}</span>}
            </div>
          )}
          {action && <div className="card--action">{action}</div>}
        </div>
      </div>
    </a>
  );
};

export const All_card_offers = () => {
  return (
    <>
      <Card_offers
        title={'Фестиваль «цветущая сакура»'}
        text={'Фестиваль цветущей сакуры  — это праздник для всей семьи, где каждый может найти что-то особенное — от прогулок под цветущими деревьями до участия в мастер-классах и дегустациях стрит-фуда. Насыщенная программа дня подарит впечатления и новые эмоции.'}
        image={'../../assets/img/2.jpg'}
        list={offersList}
        price={offersPrice}
        action={<Button type={'filled-accent'} icon={'icon-ic-eye'}></Button>}
      />
      <Card_offers
        title={'Фестиваль «цветущая сакура»'}
        text={'Окунитесь в атмосферу настоящей Японии на фестивале рыб Кои в саду «Мрия» — яркие кои, древние легенды, музыка кото, аромат чая и сотни огней на воде ждут вас !'}
        image={'../../assets/img/2.jpg'}
        list={offersList}
        price={offersPrice}
        action={<Button type={'filled-accent'} icon={'icon-ic-eye'}></Button>}
      />
      <Card_offers
        title="Фестиваль «цветущая сакура»"
        text={'Фестиваль проходит в Японском саду «Мрия» — покормите кои с рук, загадайте желание, насладитесь чайной церемонией и волшебным вечерним шоу фонарей на воде.'}
        image={'../../assets/img/1.jpg'}
        list={offersList}
        price={offersPrice}
        action={<Button type={'filled-accent'} icon={'icon-ic-eye'}></Button>}
      />
      <Card_offers
        title="Фестиваль «цветущая сакура»"
        text={'Фестиваль проходит в Японском саду «Мрия» — покормите кои с рук, загадайте желание, насладитесь чайной церемонией и волшебным вечерним шоу фонарей на воде.'}
        image={'../../assets/img/1.jpg'}
        list={offersList}
        price={offersPrice}
        action={<Button type={'filled-accent'} icon={'icon-ic-eye'}></Button>}
      />
    </>
  );
};
