import { Button } from '../../button/button.jsx';
import { Card_list } from './card.jsx';

export const Card_vacancy = ({ title, text, list = [], link }) => {
  const titleContent = (
    <>
      {title}
      <span className="icon-ic-chevron-right" />
    </>
  );

  return (
    <div className="card">
      <div className="card--content">
        {title && link && (
          <a className="card--title" href={link}>
            {titleContent}
          </a>
        )}
        {title && !link && (
          <div className="card--title">{titleContent}</div>
        )}
        {text && <div className="card--text">{text}</div>}
        <Card_list list={list} />
        <div className="card--action">
          <Button type="filled-primary">Откликнуться</Button>
        </div>
      </div>
    </div>
  );
};

const vacancyList = [{ text: 'Полная занятость, полный день' }];

export const All_card_vacancies = () => {
  return (
    <>
      <Card_vacancy
        title="Название вакансии"
        text="85 000 ₽"
        list={vacancyList}
        link="/"
      />
      <Card_vacancy
        title="Название вакансии"
        text="85 000 ₽"
        list={vacancyList}
        link="/"
      />
      <Card_vacancy
        title="Название вакансии"
        text="85 000 ₽"
        list={vacancyList}
        link="/"
      />
      <Card_vacancy
        title="Название вакансии"
        text="85 000 ₽"
        list={vacancyList}
        link="/"
      />
    </>
  );
};
