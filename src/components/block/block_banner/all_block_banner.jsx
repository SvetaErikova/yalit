import { Button } from "../../_ui/button/button.jsx";
import { Block_Head } from "../_ui/block--head/block--head.jsx";
import { Block_banner } from './block_banner.jsx';
import { Booking } from '../../booking/booking-comp.jsx';

export const All_block_banner = () => {
	return (
		<>
      {/*Баннер Hero с букингом*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-hero" subtitle="Подзаголовок" headingSize={'f-h1'}  caption="Баннер Hero" headingLevel={1} action={<>
              <Button type="filled-primary"  icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>} />,
            imageSrc: "/assets/img/1.jpg",
          },
        ]}
        className={"block_banner-hero"}
      >
      </Block_banner>
      <Booking></Booking>
      <br/>
      {/*Баннер Hero*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-hero" subtitle="Подзаголовок" headingSize={'f-h1'}  caption="Баннер Hero" headingLevel={1} action={<>
              <Button type="filled-secondary"  icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>} />,
						imageSrc: "/assets/img/1.jpg",
					},
				]}
				className={"block_banner-hero"}
			>
      </Block_banner>
      <br/>

      {/*Баннер Hero сдайдер*/}
			<Block_banner
				banners={[
					{
						title: <Block_Head title="block_banner-group" subtitle="Подзаголовок" caption="Баннер Hero + Слайдер " headingLevel={2} action={<>
              <Button type="filled-secondary"  icon="icon-ic-uniq-arrow-right">Подробнее</Button>
              <Button type="outlined"  icon="icon-ic-uniq-arrow-right">Условия</Button>
            </>} />,
						imageSrc: "/assets/img/1.jpg",
					},
					{
						title: <Block_Head title="block_banner-group" subtitle="Подзаголовок" caption="Дополнительное описание" headingLevel={2} action={<>
              <Button type="filled-secondary"  icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>} />,
						imageSrc: "/assets/img/2.jpg",
					},
				]}
				className={"block_banner-hero"}
			>
      </Block_banner>
      <br/>
      {/*Баннер custom*/}
			<Block_banner
				banners={[
					{
						title: <Block_Head title="block_banner-custom" subtitle="Подзаголовок" caption="Баннер custom" headingLevel={2} action={<>
              <Button type="filled-secondary"  icon="icon-ic-uniq-arrow-right">Подробнее</Button>
              <Button type="outlined"  icon="icon-ic-uniq-arrow-right">Условия</Button>
            </>} />,
						imageSrc: "/assets/img/1.jpg",
					},
				]}
				className={"block_banner-custom"}
			></Block_banner>
      <br/>
      {/*Баннер по высоте контента*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-fit_content" subtitle="Подзаголовок" caption="Высота по контенту" headingLevel={2} action={<>
              <Button type="filled-secondary"  icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>} />,
            imageSrc: "/assets/img/2.jpg",
          },
        ]}
        className={"block_banner-fit_content"}
      ></Block_banner>
      <br/>
      {/*Баннер по высоте контента с букингом*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-fit_content" subtitle="Подзаголовок" caption="Высота по контенту" headingLevel={2} action={<>
              <Button type="filled-secondary"  icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>} />,
            imageSrc: "/assets/img/2.jpg",
          },
        ]}
        className={"block_banner-fit_content"}
      ></Block_banner>
      <Booking></Booking>
      <br/>
      {/*Баннер без медиа*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-no_media" subtitle="Подзаголовок" caption="Баннер без картинки" headingLevel={2} action={<>
              <Button type="filled-secondary"  icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>}/>,
          },
        ]}
        className={"block_banner-no_media block_banner-fit_content"}
      ></Block_banner>

      {/*Баннер с видео */}
			<Block_banner
				banners={[
					{
						title: <Block_Head title="block_banner" subtitle="Подзаголовок" caption="Баннер без картинки с видео " headingLevel={2} action={<>
              <Button type="filled-secondary"  icon="icon-ic-uniq-arrow-right">Подробнее</Button>
              <Button type="outlined"  icon="icon-ic-uniq-arrow-right">Условия</Button>
            </>} />,
						imageSrc: "/assets/img/1.jpg",
						videoSrc: "/assets/video/@lepragram.mp4",
					},
				]}
			></Block_banner>
		</>
	);
};
