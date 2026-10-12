import clsx from 'clsx';
import { Labels } from '../../labels/labels.jsx';

export const Card_list = ({ list }) => {
  if (!list?.length) return null;

  return (
    <div className="card--list">
      {list.map((item, index) => (
        <div className="card--list_item" key={`${item.icon ?? ''}-${item.title ?? ''}-${index}`}>
          {item.icon ? <span className={item.icon}></span> : null}
          {item.title ? <span className="card--list_title">{item.title}</span> : null}
          {item.text ? <span className="card--list_text">{item.text}</span> : null}
        </div>
      ))}
    </div>
  );
};

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
        {/*<Labels items={labels} />*/}
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

