import { Button } from '../../button/button.jsx';
import { Card } from './card.jsx';

export const Card_accommodation = ({ title, text, link, children, discount, discountPopup }) => {
  return (
    <Card title={title}
          text={text}
          labels={['Корпус 1']}
          discountPopup={discountPopup}
          discount={discount}
          images={[
            { src: '/assets/img/1.jpg' },
            { src: '/assets/img/2.jpg' },
          ]}
          action={<>
            <Button link={'/'} type={'filled'} color={'accent'} icon={'icon-calendar'} icon_left={true} size={'s'}>
              от 3500 ₽
              <span class="night">/ ночь</span>
            </Button>
            <Button link={'/'} color={'neutral'} type={'filled'} size={'s'}>
              Подробнее
            </Button>
          </>}

    >     {children}</Card>
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
