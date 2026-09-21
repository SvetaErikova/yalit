import { Block } from '../../block/block.jsx';
import { Block_Head } from '../../block/_ui/block--head/block--head.jsx';
import { Accordion_full } from '../../_ui/accordion/accordion-full.jsx';

export const Faq = ({ title = 'Блок faq', image, children }) => {
  return (
    <Block title={<Block_Head title={title} />} className={'content_faq'}>
      {image && (
        <div className="block--image">
          <img src="/assets/img/1.jpg" alt="" />
        </div>
      )}

      <div className="block--content is_cascade">
        {children ? children : <Accordion_full />}
      </div>
    </Block>
  );
};
