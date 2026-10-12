import { Button } from '../../button/button.jsx';
import { Card, Card_list } from './card.jsx';

const roomList = [
  { icon: 'icon-ic-copy', text: '18-31 м2' },
  { icon: 'icon-ic-location', text: 'до 2 гостей' },
  { icon: 'icon-ic-time', text: 'двуспальная кровать' },
];

const roomImages = [
  { src: '/assets/img/1.jpg' },
  { src: '/assets/img/2.jpg' },
];

export const Card_room = ({
  title,
  text,
  images = roomImages,
  link = '/',
  list = roomList,
  children,
}) => {
  return (
    <Card
      title={title}
      text={text}
      images={images}
      action={<Button  type="filled-secondary" icon="icon-ic-uniq-arrow-right" />}
    >
      <Card_list list={list} />
      {children}
    </Card>
  );
};

export const All_card_room = () => {
  return (
    <>
      <Card_room
        title="Номер с видом на сад"
        text="Опциональное описание в три строки, при необходимости тоже уходящее в точечки или не уходящее, если текста мало"
      />
      <Card_room
        title="Номер с видом на море"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <Card_room
        title="Семейный номер"
        text="In the heart of Altai, on the slope of Mount Malaya Sinyukha, there is a unique chalet complex"
      />
      <Card_room
        title="Номер делюкс"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </>
  );
};
