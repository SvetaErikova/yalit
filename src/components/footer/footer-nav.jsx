import { footerNav } from '../../shared/footer-nav.js';

export const FooterNav = () => {
  return (
    <nav className="footer--nav">
      {footerNav.map((section) => (
        <>
          {/*{section.title && (*/}
          {/*  <p className="footer--nav_title">{section.title}</p>*/}
          {/*)}*/}
          {section.groups.map((group) => (
            <div className="footer--nav_group">
              <p className="footer--nav_group_title">{group.title}</p>
              <ul className="footer--nav_list">
                {group.links.map((link) => (
                  <li className="footer--nav_list_item">
                    <a href={link.href}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      ))}
    </nav>
  );
};

