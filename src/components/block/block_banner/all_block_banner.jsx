import { Button } from "../../_ui/button/button.jsx";
import { Block_Head } from "../_ui/block--head/block--head.jsx";
import { Block_banner } from './block_banner.jsx';
import { HeroContent } from '../../content/custom/hero-content/hero-content.jsx';

export const All_block_banner = () => {
	return (
		<>
      {/*Баннер Hero*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-hero" subtitle="Подзаголовок" headingSize={'f-h1'}  caption="Баннер Hero" headingLevel={1} action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>} />,
						imageSrc: "/assets/img/1.jpg",
					},
				]}
				className={"block_banner-hero"}
			>
        <HeroContent main={true}></HeroContent>
      </Block_banner>
      <br/>

      {/*Баннер Hero сдайдер*/}
			<Block_banner
				banners={[
					{
						title: <Block_Head title="block_banner-group" subtitle="Подзаголовок" caption="Баннер Hero + Слайдер " headingLevel={2} action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Подробнее</Button>
              <Button type="outlined" color="neutral" icon="icon-ic-uniq-arrow-right">Условия</Button>
            </>} />,
						imageSrc: "/assets/img/1.jpg",
					},
					{
						title: <Block_Head title="block_banner-group" subtitle="Подзаголовок" caption="Дополнительное описание" headingLevel={2} action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>} />,
						imageSrc: "/assets/img/2.jpg",
					},
				]}
				className={"block_banner-hero"}
			>
        <HeroContent></HeroContent>
      </Block_banner>
      <br/>
      {/*обычный Баннер*/}
			<Block_banner
				banners={[
					{
						title: <Block_Head title="block_banner" subtitle="Подзаголовок" caption="Баннер обычный" headingLevel={2} action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Подробнее</Button>
              <Button type="outlined" color="neutral" icon="icon-ic-uniq-arrow-right">Условия</Button>
            </>} />,
						imageSrc: "/assets/img/1.jpg",
					},
				]}
				className={""}
			></Block_banner>
      <br/>
      {/*обычный Баннер слайдер*/}
      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner" subtitle="Подзаголовок" caption="Баннер обычный" headingLevel={2} action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>} />,
            imageSrc: "/assets/img/1.jpg",
          },
          {
            title: <Block_Head title="block_banner_2" subtitle="Подзаголовок" caption="Баннер обычный" headingLevel={2} action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Подробнее</Button>
              <Button type="outlined" color="neutral" icon="icon-ic-uniq-arrow-right">Условия</Button>
            </>} />,
            imageSrc: "/assets/img/1.jpg",
          },

        ]}
        className={""}
      ></Block_banner>
      <br/>
      {/*обычный no_media*/}

      <Block_banner
        banners={[
          {
            title: <Block_Head title="block_banner-no_media без colormode" subtitle="Подзаголовок" caption="Баннер без картинки" headingLevel={2} action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Подробнее</Button>
            </>}/>,
          },
        ]}
        className={"block_banner-no_media"}
      ></Block_banner>

      {/*Баннер с видео */}
			<Block_banner
				banners={[
					{
						title: <Block_Head title="block_banner" subtitle="Подзаголовок" caption="Баннер без картинки с видео " headingLevel={2} action={<>
              <Button type="filled-secondary" color="neutral" icon="icon-ic-uniq-arrow-right">Подробнее</Button>
              <Button type="outlined" color="neutral" icon="icon-ic-uniq-arrow-right">Условия</Button>
            </>} />,
						imageSrc: "/assets/img/1.jpg",
						videoSrc: "/assets/video/@lepragram.mp4",
					},
				]}
			></Block_banner>
		</>
	);
};
