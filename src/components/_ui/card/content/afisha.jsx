import { Button } from '../../button/button.jsx';

export const Card_afisha = ({ date, image, title, text, action }) => {
  return (
    <a href='/' className={'card'}>
      <span class="card--date">{date}</span>
      <div class="card--image">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div class="card--content">
        <div class="card--title">{title}</div>
        {text && <div className={'card--text'}>{text}</div>}
        {action && <div className="card--action">{action}</div>}
      </div>
    </a>
  );
};

export const All_card_offers = () => {
  return (
    <>
      <Card_afisha
        title={'Фестиваль «цветущая сакура»'}
        text={'Фестиваль цветущей сакуры  — это праздник для всей семьи, где каждый может найти что-то особенное — от прогулок под цветущими деревьями до участия в мастер-классах и дегустациях стрит-фуда. Насыщенная программа дня подарит впечатления и новые эмоции.'}
        image={'../../assets/img/2.jpg'}
        date={'18-19 апреля'}
        action={<Button type={'flat'} icon={'icon-ic-uniq-arrow-right'}>зарегистрироваться</Button>}
      />
      <Card_afisha
        title={'Фестиваль «цветущая сакура»'}
        text={'Окунитесь в атмосферу настоящей Японии на фестивале рыб Кои в саду «Мрия» — яркие кои, древние легенды, музыка кото, аромат чая и сотни огней на воде ждут вас !'}
        image={'../../assets/img/2.jpg'}
        date={'ежедневно'}
        action={<Button type={'flat'} icon={'icon-ic-uniq-arrow-right'}>зарегистрироваться</Button>}

      />
      <Card_afisha
        title="Фестиваль «цветущая сакура»"
        text={'Фестиваль проходит в Японском саду «Мрия» — покормите кои с рук, загадайте желание, насладитесь чайной церемонией и волшебным вечерним шоу фонарей на воде.'}
        image={'../../assets/img/1.jpg'}
        action={<Button type={'flat'} icon={'icon-ic-uniq-arrow-right'}>зарегистрироваться</Button>}
        date={'20 апреля'}
      />
      <Card_afisha
        title="Фестиваль «цветущая сакура»"
        text={'Фестиваль проходит в Японском саду «Мрия» — покормите кои с рук, загадайте желание, насладитесь чайной церемонией и волшебным вечерним шоу фонарей на воде.'}
        image={'../../assets/img/1.jpg'}
        action={<Button type={'flat'} icon={'icon-ic-uniq-arrow-right'}>зарегистрироваться</Button>}
        date={'20 апреля'}
      />
    </>
  );
};
