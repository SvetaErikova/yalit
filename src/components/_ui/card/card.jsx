import clsx from 'clsx';
import { Button } from '../button/button.jsx';
import { Labels } from '../labels/labels.jsx';
import {Gallery} from "../../gallery/gallery-comp.jsx";

export const Card = ({
  title,
  text,
  subhead,
  action,
  price,
  image,
  images = [],
  video,
  poster,
  link,
  popup,
  labels = [],
  children,
  className,
}) => {
  const cardContent = (
    <>

      <div className="card--image">
        {images.length > 0 &&
          images.map((img) => (
            <img key={img.src} className={clsx(images.length > 1 && 'card__image_slide')} src={img.src} alt="" loading="lazy" />
          ))}
        {image && (
          <img src={image} alt="" loading="lazy" />
        )}
        {video && (
          <video src={video} poster={poster} playsinline loop muted loading="lazy" />
        )}
        {price && (
          <div class={'card--price'}>
            <span>{price}</span>
          </div>
        )}
      </div>


      <div className="card--content">
        <Labels items={labels} />
        {subhead && <div className={'card--subhead'}>{subhead}</div>}
        {title && <div className={'card--title'}>{title}</div>}
        {text && <div className={'card--text'}>{text}</div>}
        {children}
        {action && <div className="card--action">{action}</div>}
      </div>
    </>
  );

  return link ? (
    <a class={clsx('card', className)} href={link}>
      {cardContent}
    </a>
  ) : (
    <div class={clsx('card', className)} data-openpopup={popup}>
      {cardContent}
    </div>
  );
};
export const Card_offers = ({date, image, title, text, action}) =>{
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
  )
}
export const Card_reviews = ({
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
export const Card_doc = ({ title, text, link }) => {
  return (
    <Card title={title} text={text} popup={'popup_for_cascade'}  action={
      <Button type={'outlined'} color={'neutral'} icon={'icon-ic-eye'}></Button>} link={link}></Card>
  );
};
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

