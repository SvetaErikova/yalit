import clsx from 'clsx';
import { Block_link } from '../_ui/block--link/block--link.jsx';

export const Block_List = ({
  children,
  title,
  className,
  link = false,
  filter,
  pagination,
  selection,
  slider = false,
  colorMode = '',
  col = '',
  centered = false,
  id
}) => {
  return (
    <section id={id} className={clsx('block block_list', className, centered ? '-centered' : null, slider ? 'block_list-slider' : null , colorMode ? colorMode : null, col ? col : null)}>
      <div className="block--wrapper">
        {title && title}

        {link && <Block_link />}

        {selection && selection}

        {filter && <div className="block--filter">{filter}</div>}

        {children && <div className="block--elements">
          {children}
          {pagination && pagination}
        </div>}
      </div>
    </section>
  );
};
