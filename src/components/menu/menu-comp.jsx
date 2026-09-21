import clsx from "clsx";
import { Button } from "../_ui/button/button.jsx";
import { footerNav } from "../../shared/footer-nav.js";

const renderSectionContent = (section) => (
	<div className="menu--groups">
		{section.groups.map((group) => (
			<div className="menu--group" key={group.title}>
				<a href={'/'} className="menu--group-title">{group.title}</a>
				<div className="menu--group-links">
					{group.links.map((link) => (
						<Button
							key={`${group.title}-${link.text}`}
							link={link.href}
							type="link"
							color="brand"
							size={"md"}
						>
							{link.text}
						</Button>
					))}
				</div>
			</div>
		))}
	</div>
);

export const Menu = () => {
	return (
		<>
			<div className="menu">
				<div className="menu--layout">
					<div className="menu--nav">
						{footerNav.map((section, index) => (
              <button
                type="button"
                className={clsx('menu--nav_item', index === 0 && 'is-active')}
                data-id={section.id}
                key={section.id}
              >
                <span>{section.title}</span>
              </button>
            ))}
          </div>
          <div className="menu--content">
						{footerNav.map((section, index) => (
							<div
								key={section.id}
								className={clsx(
									"menu--content_panel",
									index === 0 && "is-active"
								)}
								data-id={section.id}
							>
								{renderSectionContent(section)}
							</div>
						))}
					</div>
				</div>

				<div className="menu--mobile">
					{footerNav.map((section, index) => (
						<div
							className="menu--mobile_item"
							key={`mobile-${section.id}`}
						>
							<button
								type="button"
								className="menu--mobile_toggle"
							>
								<span>{section.title}</span>
                <span class='icon-chevron_d'></span>
							</button>
							<div className="menu--mobile_body">
								{renderSectionContent(section)}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
