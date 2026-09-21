import clsx from 'clsx';

export const Dropdown = ({ children, className, ...props }) => {
  // First child is the trigger, rest is content
  const childrenArray = Array.isArray(children) ? children : [children];
  const trigger = childrenArray[0];
  const content = childrenArray.slice(1);

  return (
    <div className={clsx('dropdown', className)} {...props}>
      {trigger}
      <div className="dropdown--wrapper">
        <div className="dropdown--list">
          {content}
        </div>
      </div>
    </div>
  );
};

