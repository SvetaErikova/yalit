import { Card } from './card.jsx';

export const Card_service = ({
  title,
  text,
  image,
  link,
  price,
  children,
  className,
}) => {
  return (
    <Card
      title={title}
      text={text}
      image={image}
      link={link}
      price={price}
      className={className}
    >
      {children}
    </Card>
  );
};
