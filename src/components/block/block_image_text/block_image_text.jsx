import clsx from 'clsx';
import { Gallery } from '../../gallery/gallery-comp.jsx';
import { Decor } from '../../content/custom/decor/decor.jsx';

export const Block_image_text = ({
  images,
  title,
  content,
  reversed = false,
  bgWrapper = false,
  backgroundMode = '' | 'dark-mode',
  ratioFill = false,
  centered = false,
  decor = false,
  className,
}) => {
  const wrapperClasses = clsx(
    'block block_image_text',
    className,
    reversed && 'block_image_text-reversed',
    backgroundMode && `${backgroundMode}`,
    ratioFill && 'block_image_text-ratio-fill',
    bgWrapper && 'block_image_text-bg-wrapper',
    centered && 'block_image_text-centered',
    decor && 'block_image_text-decor',
  );

  const renderMedia = () => {
    return (
      images && (<div className="block--image">
          <Gallery images={images}></Gallery>
        </div>
      )
    );
  };

  return (
    <section className={wrapperClasses}>
      <div className="block--wrapper">
        {renderMedia()}
        <div className="block--content">
          {decor && <Decor />}
          {title}
          {content && <div className="is_cascade">{content}</div>}
        </div>
      </div>
    </section>
  );
};
