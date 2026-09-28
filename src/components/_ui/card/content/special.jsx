import { Card } from './card.jsx';

export const Card_special = ({
  title,
  text,
  image,
  action,
  link,
  children,
  className,
}) => {
  return (
    <Card
      title={title}
      text={text}
      image={image}
      action={action}
      link={link}
      className={className}
    >
      {children}
    </Card>
  );
};
