import clsx from "clsx";
import {Labels} from "../../_ui/labels/labels.jsx";

export const Block_banner = ({ className = "", banners = [],colorMode='', children }) => {
	return (
		<section class={clsx("block block_banner", className, banners.length > 1 && "block_banner-group", colorMode? colorMode: null)}>
			<div class="block--wrapper">
				{banners.map((banner) => (
					<div class="banner">
						<div class="block--content">
							{banner.imageSrc && !banner.videoSrc && <img src={banner.imageSrc} alt="" loading="lazy" />}
							{banner.videoSrc && <video src={banner.videoSrc} muted loop playsInline autoplay {...(banner.imageSrc && { poster: banner.imageSrc })} />}
						</div>
						{banner.title}
					</div>
				))}
        {children}
			</div>
		</section>
	);
};
export const Block_banner_cascade = ({ className = "", banners = [] }) => {
  return (
    <section className={clsx("block block_banner block_banner-cascade", className, banners.length > 1 && "block_banner-group")}>
      <div className="block--wrapper">
        {banners.map((banner) => (
          <div className="banner">
            <div className="block--content">
              {banner.imageSrc && !banner.videoSrc && <img src={banner.imageSrc} alt="" loading="lazy" />}
              {banner.videoSrc && <video src={banner.videoSrc} muted loop playsInline
                                         autoPlay {...(banner.imageSrc && { poster: banner.imageSrc })} />}
            </div>
            {banner.labels && (
              <Labels
                items={banner.labels}
                className="block_banner--labels"
                itemClassName="block_banner--label"
              />
            )}
            {banner.title}
            {banner.text}
          </div>
        ))}
      </div>
    </section>
  )
}
