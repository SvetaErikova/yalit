import { Card } from './card.jsx';

export const Card_service = ({
  title,
  text,
  image,
  link,
  price,
  children,
  className,
}) => {
  return (
    <Card
      title={title}
      text={text}
      image={image}
      link={link}
      price={price}
      className={className}
    >
      {children}
    </Card>
  );
};

export const All_card_services = () => {
  return (
    <>
      <Card_service
        title={'Чайная церемония'}
        text={'Погружение в японскую традицию с мастером церемонии, ароматным чаем и спокойной атмосферой сада.'}
        image={'../../assets/img/2.jpg'}
        link={'/'}
      />
      <Card_service
        title={'Индивидуальная экскурсия'}
        text={'Персональная прогулка по саду с гидом, историями о символике пространства и редких растениях.'}
        image={'../../assets/img/1.jpg'}
        link={'/'}
      />
      <Card_service
        title={'Мастер-класс по каллиграфии'}
        text={'Практическое занятие по основам японской каллиграфии с материалами и сопровождением мастера.'}
        image={'../../assets/img/2.jpg'}
        link={'/'}
      />
      <Card_service
        title={'Фотосессия в саду'}
        text={'Прогулка по самым живописным маршрутам сада с профессиональным фотографом и готовыми кадрами.'}
        image={'../../assets/img/1.jpg'}
        link={'/'}
      />
    </>
  );
};
