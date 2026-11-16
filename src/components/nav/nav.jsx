import clsx from 'clsx';
import { hotelLinks, links } from './navigation.js';

export const Nav = ({ className, hotel = false, ...props }) => {
  const items = hotel ? hotelLinks : links;

  return (
    <nav className={clsx('nav', className)} {...props}>
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);

        return (
          <div className={clsx('nav--item', { dropdown: hasChildren })} key={item.label}>
            <a href={item.href} className="nav--item_link">
              <span>{item.label}</span>
              {hasChildren && (
                <span class={'icon-ic-chevron-down'}></span>
              )}
            </a>
            {hasChildren && (
              <div className="dropdown--wrapper">
                <div className="dropdown--content">
                <div className={clsx('nav--item')} key={item.label}>
                <a href={item.href} className="nav--item_link">
                  <span>{item.label}</span>
                </a>
                </div>
                  {item.children.map((child) => (
                    <div className="nav--item" key={child.label}>
                      <a href={child.href} className="nav--item_link">
                        <span>{child.label}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="nav--item nav--item-more dropdown" hidden>
        <button className="nav--item_link" type="button" aria-haspopup="menu" aria-label="Ещё">
          <span aria-hidden="true">...</span>
        </button>
        <div className="dropdown--wrapper">
          <div className="dropdown--content" data-overflow-nav></div>
        </div>
      </div>
    </nav>
  );
};
