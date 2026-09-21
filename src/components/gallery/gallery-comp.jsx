import clsx from 'clsx';
import { Button } from '../_ui/button/button.jsx';

export const Gallery = ({ images = [], isSlider = true, col = '', group = 'gallery-1', buttonMore }) => {
  return (
    <div className={clsx('gallery', isSlider && 'js-gallerySwiper', col && `col-${col}`)}>
      {images.map((img, index) => {
        const caption = img.alt || img.text;
        const href = img.video || img.src;
        const content = img.video ? (
          <video
            src={img.video}
            poster={img.poster}
            loop
            autoPlay
            playsInline
            muted
          />
        ) : (
          <img src={img.src} alt={caption || ''} loading="lazy" />
        );

        return (
          <div
            key={index}
            className={'gallery--item'}
            data-text={img.text || undefined}
          >
            <a
              href={href}
              data-fancybox={group}
              data-caption={caption || undefined}
              data-type={img.video ? 'video' : undefined}
            >
              {content}
            </a>
          </div>
        );
      })}
      {buttonMore ? (
        <Button data-fancybox-trigger={group} type="filled-primary" color="neutral">
          Смотреть все
        </Button>
      ) : null}
    </div>
  );
};
