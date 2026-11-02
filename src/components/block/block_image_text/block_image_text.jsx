import clsx from 'clsx';
import { Gallery } from '../../gallery/gallery-comp.jsx';

const Decor = () => (
  <div className="decor" aria-hidden="true">
    <span className="decor--corner" />
    <span className="decor--line -x" />
    <span className="decor--corner -flip-x" />
    <span className="decor--line -y" />
    <span className="decor--gap" />
    <span className="decor--line -y -end" />
    <span className="decor--corner -flip-y" />
    <span className="decor--line -x -end" />
    <span className="decor--corner -flip-xy" />
  </div>
);

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
