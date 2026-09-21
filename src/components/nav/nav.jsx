import clsx from 'clsx';
import { links } from './navigation.js';

export const Nav = ({ className, ...props }) => {
  return (
    <nav className={clsx('nav', className)} {...props}>
      {links.map((item) => (
        <div className="nav--item" key={item.label}>
          <div className="nav--item_title">{item.label}</div>
          <div className="nav--item_links">
            {item.children?.map((child) => (
              <a key={child.label} href={child.href} className="nav--item_link">
                <span>{child.label}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};
