import clsx from "clsx";

const BUTTON_TYPE_MAP = {
  filled: "filled-primary",
  tinted: "flat",
  outlined: "outlined",
  link: "link",
  flat: "flat",
  "filled-primary": "filled-primary",
  "filled-secondary": "filled-secondary",
};

const BUTTON_COLOR_MAP = {
  neutral: "neutral",
  primary: "neutral",
  brand: "brand",
  secondary: "brand",
  accent: "brand",
};

/**
 * A custom button component.
 *
 * @param {object} props - The component props.
 * @param {string} [props.link] - If set, renders `<a>` with this href.
 * @param {string} [props.popup] - Value for `data-openpopup`.
 * @param {string} [props.closePopup] - Value for `data-closepopup`.
 * @param {import("react").ReactNode} [props.children] - The button content.
 * @param {import("react").ReactNode | string} [props.icon] - Icon element or icon class name.
 * @param {boolean} [props.icon_left=false] - Shows icon before text.
 * @param {string} [props.className] - Additional classes.
 * @param {'filled-primary' | 'filled-secondary' | 'outlined' | 'link' | 'flat'} [props.type='filled-primary'] - Visual type.
 * @param {'neutral' | 'brand'} [props.color='neutral'] - Color theme.
 * @param {'button' | 'submit' | 'reset'} [props.htmlType='button'] - Native button type.
 * @param {object} [props.attr] - Any extra HTML attributes.
 * @returns {JSX.Element} The button element.
 */
export const Button = ({
  link,
  popup,
  closePopup,
  children,
  icon,
  icon_left = false,
  className,
  class: classProp,
  type = "filled-primary",
  color = "neutral",
  mode,
  dark,
  brand,
  size,
  htmlType = "button",
  ...attr
}) => {
  const Tag = link ? "a" : "button";
  const props = link
    ? { href: link }
    : { type: htmlType, "data-openpopup": popup, "data-closepopup": closePopup };

  const normalizedType = BUTTON_TYPE_MAP[String(type).trim()] ?? "filled-primary";
  const normalizedColor = brand
    ? "brand"
    : BUTTON_COLOR_MAP[String(color).trim()] ?? "neutral";

  const buttonClasses = clsx(
    classProp,
    className,
    "button",
    `button-${normalizedType}`,
    `button-${normalizedColor}`,
    size && `button-${size}`,
  );


  const iconElement = typeof icon === 'string' ? <span class={icon} /> : icon

  return (
    <Tag {...props} class={buttonClasses} {...attr}>
      {icon && icon_left && iconElement}
      {children && <span>{children}</span>}
      {icon && !icon_left && iconElement}
    </Tag>
  );
};
