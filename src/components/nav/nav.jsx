import clsx from 'clsx';
import { hotelLinks, links } from './navigation.js';

export const Nav = ({ className, hotel = false, ...props }) => {
  const items = hotel ? hotelLinks : links;

  return (
    <nav className={clsx('nav', className)} {...props}>
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);

        return (
          <div className={clsx('nav--item', { is_dropdown: hasChildren })} key={item.label}>
            <a href={item.href} className="nav--item_link">
              <span>{item.label}</span>
              {hasChildren && (
                <span class={'icon-ic-chevron-down'}></span>
              )}
            </a>
            {hasChildren && (
              <div className="is_dropdown--wrapper">
                <div className="is_dropdown--content">
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
    </nav>
  );
};
