import { Button } from '../../button/button.jsx';

const REVIEW_CARD_TEXT = (
  <>
    <p>Японский сад — оазис спокойствия в шумном городе!</p>
    <p>
      Была здесь в выходные с семьёй, и это просто волшебное место! Честно, не ожидала найти такой
      аутентичный японский сад у нас.
    </p>
    <p>Что понравилось:</p>
    <ul>
      <li>Невероятно ухоженная территория — каждый камушек на своём месте</li>
      <li>Карпы кои в пруду — дети были в восторге, можно покормить</li>
      <li>Беседки для медитации с видом на водопад</li>
      <li>Сакура цвела потрясающе (были в апреле)</li>
      <li>Чайная церемония — интересный опыт, хоть и недёшево…</li>
    </ul>
    <p>Что понравилось:</p>
    <ul>
      <li>Невероятно ухоженная территория — каждый камушек на своём месте</li>
      <li>Карпы кои в пруду — дети были в восторге, можно покормить</li>
      <li>Беседки для медитации с видом на водопад</li>
      <li>Сакура цвела потрясающе (были в апреле)</li>
    </ul>
    <p>Чайная церемония — интересный опыт, хоть и недёшево…</p>
  </>
);

export const Card_review = ({
  authorName = 'Ольга',
  rating = 5,
  text,
  sourceLabel = '/assets/img/reviews/101-Hotels.svg',
  date = '23.10.2024',
  image = '/assets/img/1.jpg',
  buttonText = 'подробнее',
}) => {
  const ratingPercent = (rating / 5) * 100;

  return (
    <div className="card review" data-openpopup={'popup_for_review'}>
      <div className="review__image">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="review__content">
        <div className="review__stars" itemProp="reviewRating">
          <svg className="star-rate" viewBox="0 0 160 32" itemProp="ratingValue" content={rating}>
            <g mask="url(#stars-mask)">
              <rect width="100%" height="100%" fill="var(--inactive_stars)"></rect>
            </g>
            <g mask="url(#stars-mask)">
              <rect width={`${ratingPercent}%`} height="100%" fill="var(--star-color)"></rect>
            </g>
          </svg>
        </div>
        {text && (
          <div className="review_description--clamper">
            <div className="review_description--wrapper">
              <div className="review_description is_cascade">
                {text}
              </div>
            </div>
          </div>
        )}
        <div className="review__action">
          {buttonText && (
            <Button  color={'neutral'} type={'flat'} >{buttonText}</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const All_card_reviews = () => {
  return (
    <>
      <Card_review
        authorName="Андрей Сорокин"
        rating={5}
        sourceLabel={'/assets/img/reviews/ostrovok.svg'}
        text={<> <p>Японский сад — оазис спокойствия в шумном городе!</p>
          <p>
            Была здесь в выходные с семьёй, и это просто волшебное место! Честно, не ожидала найти такой
            аутентичный японский сад у нас.
          </p></>}
      />
      <Card_review
        authorName="Мария Иванова"
        rating={4}
        text={REVIEW_CARD_TEXT}
      />
      <Card_review
        authorName="Иван Петров"
        rating={5}
        text={REVIEW_CARD_TEXT}
      />
      <Card_review
        authorName="Елена Сидорова"
        rating={3}
        text={REVIEW_CARD_TEXT}
      />
      <Card_review
        authorName="Дмитрий Козлов"
        rating={5}
        text={REVIEW_CARD_TEXT}
      />
    </>
  );
};
