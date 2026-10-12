import { Button } from '../../button/button.jsx';

export const Card_special = ({ image, title, text, action }) => {
  return (
    <div className="card">
      <div className="card--image">
        <img className="card--image_bg" src="/assets/img/decor/decor-bg-offer.svg" alt="" />
        <img className="card--image_photo" src={image} alt="" loading="lazy" />
        <img className="card--image_decor" src="/assets/img/decor/decor-offer.svg" alt="" />
      </div>
      <div className="card--content">
        {title && <div className="card--title">{title}</div>}
        {text && <div className="card--text">{text}</div>}
        {action && <div className="card--action">{action}</div>}
      </div>
    </div>
  );
};

export const All_card_special = () => {
  return (
    <>
      <Card_special
        title={'Тариф с завтраком'}
        text={'Фестиваль цветущей сакуры  — это праздник для всей семьи, где каждый может найти что-то особенное — от прогулок под цветущими деревьями до участия в мастер-классах и дегустациях стрит-фуда. Насыщенная программа дня подарит впечатления и новые эмоции.'}
        image={'../../assets/img/2.jpg'}
        action={<><Button type={'filled-accent'}>забронировать</Button><Button type={'outlined'}>подробнее</Button></>}
      />
      <Card_special
        title="Фестиваль «цветущая сакура»"
        text={'Окунитесь в атмосферу настоящей Японии на фестивале рыб Кои в саду «Мрия» — яркие кои, древние легенды, музыка кото, аромат чая и сотни огней на воде ждут вас !'}
        image={'../../assets/img/2.jpg'}
        action={<Button type={'filled-accent'}>забронировать</Button>}
      />
      <Card_special
        title="Фестиваль «цветущая сакура»"
        text={'Фестиваль проходит в Японском саду «Мрия» — покормите кои с рук, загадайте желание, насладитесь чайной церемонией и волшебным вечерним шоу фонарей на воде.'}
        image={'../../assets/img/1.jpg'}
        action={<><Button type={'filled-accent'}>забронировать</Button><Button type={'outlined'}>подробнее</Button></>}
      />
    </>
  );
};
