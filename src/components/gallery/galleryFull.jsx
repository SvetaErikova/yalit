import { Block_element } from '../block/block_element/block_element.jsx';
import { Gallery } from './gallery-comp.jsx';
import { Block_selection } from '../block/_ui/block--selection/block--selection-comp.jsx';

const defaultTabs = [
  { label: "Все" },
  { label: "Номера" },
  { label: "Рестораны и бары" },
  { label: "Spa и бассейны" }
];


export const GalleryFull = ({
  images =[],
  isSlider = true,
  col ,
  group = "gallery-1",
  tabs = defaultTabs,
  showSelection = true,
  title = null,
  link = false,
  buttonMore ,
}) => {
  const selection =
    showSelection && tabs?.length ? <Block_selection tabs={tabs}></Block_selection> : null;

  return (
    <Block_element className={"content_gallery"} title={title} selection={selection} link={link}>
      <Gallery images={images} isSlider={isSlider} col={col} group={group}  buttonMore={buttonMore}/>
    </Block_element>
  );
};
