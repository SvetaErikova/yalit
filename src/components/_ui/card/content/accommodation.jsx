import { Button } from '../../button/button.jsx';
import { Card_list } from './card.jsx';

const accommodationList = [
  { icon: 'icon-ic-copy', text: '18-31 м2' },
  { icon: 'icon-ic-location', text: 'до 2 гостей' },
  { icon: 'icon-ic-time', text: 'двуспальная кровать' },
];

const accommodationImages = [
  { src: '/assets/img/1.jpg' },
  { src: '/assets/img/2.jpg' },
];

export const Card_accommodation = ({ title, text, children, list, images = accommodationImages }) => {
  return (
    <div className="card">
      <div className="card--image">
        {images.map((img, index) => (
          <img
            key={`${img.src}-${index}`}
            className={images.length > 1 ? 'card__image_slide' : undefined}
            src={img.src}
            alt=""
            loading="lazy"
          />
        ))}
      </div>
      <div className="card--content">
        <div className="card--top">
          {title && <div className="card--title">{title}</div>}
          {text && <div className="card--text">{text}</div>}
        </div>
        <Card_list list={list} />
        {children}
        <div className="card--bottom">
          <div className="card--action">
            <Button link="/" type="filled-primary">подробнее</Button>
            <Button link="/" type="filled-accent">забронировать</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const All_cards_accommodation = () => {
  return (
    <>
      <Card_accommodation
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. Lacus tortor cursus ut volutpat ut aliquam non. "
        list={accommodationList}
      >

      </Card_accommodation>
      <Card_accommodation
        title="Название документа "
        text="Lorem ipsum dolor sit amet consectetur. Vitae non integer egestas sociis vulputate mi amet vestibulum. "
        list={accommodationList}
      />
      <Card_accommodation
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. Lacus tortor cursus ut volutpat ut aliquam non. "
        list={accommodationList}
      />
      <Card_accommodation
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. "
        list={accommodationList}
      />
      <Card_accommodation
        title="Название документа в несколько строк"
        text="Lorem ipsum dolor sit amet consectetur. "
        list={accommodationList}
      />
    </>
  );
};
