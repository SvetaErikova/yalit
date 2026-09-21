import clsx from "clsx";

const isReactElement = (value) => typeof value === 'object' && value !== null && '$$typeof' in value;

const normalizeLabel = (label) => {
  if (typeof label === 'object' && label !== null && !isReactElement(label)) {
    return {
      text: label.text ?? '',
      accent: Boolean(label.accent),
      dark: Boolean(label.dark),
      icon: label.icon ?? null,
      itemClass: label.className,
    };
  }

  return {
    text: label,
    accent: false,
    dark: false,
    icon: null,
    itemClass: undefined,
  };
};

export const Labels = ({items = [], className, itemClassName}) => {
  if (!items?.length) return null;

  return (
    <div class={clsx('labels', className)}>
      {items.map((label, index) => {
        const {text, accent, dark, icon, itemClass} = normalizeLabel(label);

        return (
          <div
            class={clsx(
              'label',
              accent && '-accent',
              dark && '-dark',
              itemClass,
              itemClassName
            )}
            key={index}
          >
            {icon && <span class={icon}/>}
            {text}
          </div>
        );
      })}
    </div>
  );
};

