import { Block_element } from '../block/block_element/block_element.jsx';
import { Gallery } from './gallery-comp.jsx';

export const GalleryFull = ({
  title = null,
  link = false,
  galleries = [],
}) => {
  return (
    <Block_element className="content_galleries" title={title} link={link}>
      {galleries.map((item, index) => (
        <div className="block--group" key={item.title ?? index}>
          {item.title && <h3 className="block--group_title">{item.title}</h3>}
          <Gallery cards={item.cards} group={item.group ?? `gallery-${index}`} />
        </div>
      ))}
    </Block_element>
  );
};
