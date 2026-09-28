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
