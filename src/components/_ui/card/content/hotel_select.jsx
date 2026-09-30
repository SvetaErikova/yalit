
export const Card_hotel_select = ({
  title,
  subtitle,
  img,
  rating,

}) =>{
  const ratingPercent = (rating / 5) * 100;
  return (
    <a href={'/'} class={'card'}>
      <div className="card--image">
        <img src={img} alt="title" />
      </div>
      <div class="card--content">
        <div class="card--stars">
          <svg className="star-rate" viewBox="0 0 160 32" itemProp="ratingValue" content={rating}>
            <g mask="url(#stars-mask)">
              <rect width="100%" height="100%" fill="var(--inactive_stars)"></rect>
            </g>
            <g mask="url(#stars-mask)">
              <rect width={`${ratingPercent}%`} height="100%" fill="var(--star-color)"></rect>
            </g>
          </svg>
        </div>

        <div class="card--title">{title}</div>
        <div class="card--subtitle">{subtitle}</div>

      </div>
    </a>
  )
}
