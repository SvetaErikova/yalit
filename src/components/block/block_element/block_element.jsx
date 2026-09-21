import clsx from 'clsx';
import { Block_link } from '../_ui/block--link/block--link.jsx';

export const Block_element = ({ className, children, title, selection, link, centered= false }) => {
  return (
    <section className={clsx('block block_element', className, centered ? '-centered' : null)}>
      <div class="block--wrapper">
        {title}
        {selection}
        {link && <div className="block--link"><Block_link /></div>}
        <div class="block--elements">
          {children}
        </div>
       </div>
    </section>
  );
};
