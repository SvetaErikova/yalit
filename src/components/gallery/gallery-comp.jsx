import clsx from 'clsx';

export const Gallery = ({ images = [], isSlider = true, col = '', group = 'gallery-1', cards }) => {
  if (cards?.length) {
    return (
      <div className="gallery">
        {cards.map((card, index) => {
          const media = card.images ?? [];
          const title = card.title;
          const fancyGroup = `${group}-${index}`;
          const cover = media.find((img) => img.video || img.src);

          if (!cover) return null;

          return (
            <button
              type="button"
              className="gallery--item"
              data-fancybox-trigger={fancyGroup}
              key={`${title ?? 'card'}-${index}`}
            >
              {media.map((img, imgIndex) => {
                const src = img.video || img.src;
                if (!src) return null;
                const caption = img.text || title || undefined;

                if (img.video) {
                  return (
                    <video
                      key={`${src}-${imgIndex}`}
                      src={img.video}
                      poster={img.poster || img.src}
                      data-fancybox={fancyGroup}
                      data-src={img.video}
                      data-type="video"
                      data-caption={caption}
                    />
                  );
                }

                return (
                  <img
                    key={`${src}-${imgIndex}`}
                    src={img.src}
                    alt={imgIndex === 0 ? title || '' : ''}
                    loading="lazy"
                    data-fancybox={fancyGroup}
                    data-caption={caption}
                  />
                );
              })}
              {title && <span className="gallery--item_title">{title}</span>}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={clsx('gallery', isSlider && 'js-gallerySwiper', col && `col-${col}`)}>
      {images.map((img, index) => (
        <div key={index} className="gallery--item">
          {img.video ? (
            <video
              src={img.video}
              poster={img.poster}
              loop
              autoPlay
              playsInline
              muted
            />
          ) : (
            <img src={img.src} alt={img.alt || img.text || ''} loading="lazy" />
          )}
        </div>
      ))}
    </div>
  );
};
