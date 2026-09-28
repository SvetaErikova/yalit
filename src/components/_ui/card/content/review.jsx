import { Button } from '../../button/button.jsx';

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
