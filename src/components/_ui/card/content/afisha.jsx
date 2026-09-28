export const Card_afisha = ({ date, image, title, text, action }) => {
  return (
    <a href='/' className={'card'}>
      <span class="card--date">{date}</span>
      <div class="card--image">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div class="card--content">
        <div class="card--title">{title}</div>
        {text && <div className={'card--text'}>{text}</div>}
        {action && <div className="card--action">{action}</div>}
      </div>
    </a>
  );
};
