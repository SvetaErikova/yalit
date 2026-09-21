import MainLayout from "../../layouts/MainLoyout.jsx";
import { metaPages } from "../../shared/meta-pages";
import { GalleryFull } from '../../components/gallery/galleryFull.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';

export default function Home() {
  const defaultImages = [
    { src: "/assets/img/1.jpg" },
    { video: "/assets/video/@lepragram.mp4", poster: "/assets/img/1.jpg" },
    { src: "/assets/img/1.jpg" },
    { src: "/assets/img/1.jpg" },
  ];
  const imagesWithCaption = [
    { src: "/assets/img/1.jpg", text: "Подпись поверх изображения" },
    { src: "/assets/img/1.jpg" },
    { src: "/assets/img/1.jpg" },
  ];

  return (
    <MainLayout meta={metaPages.home}>
      <GalleryFull
        title={
          <Block_Head
            title="2 картинки"
            subtitle="Галерея"
            headingLevel={2}
          />
        }
        images={[{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" }]}
        isSlider={false}
        group="gallery-grid-triple"
        showSelection={false}
      />
      <GalleryFull
        title={
          <Block_Head
            title="3 картинки"
            subtitle="Галерея"
            caption="isSlider=false, col=3"
            headingLevel={2}
          />
        }
        images={[{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" }]}
        isSlider={false}
        group="gallery-grid-triple"
        showSelection={false}
      />
      <GalleryFull
        title={
          <Block_Head
            title="4 картинки"
            subtitle="Галерея"
            headingLevel={2}
          />
        }
        images={[{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" }]}
        isSlider={false}
        group="gallery-grid-triple"
        showSelection={false}
      />
      <GalleryFull
        title={
          <Block_Head
            title="5 картинки"
            subtitle="Галерея"
            headingLevel={2}
          />
        }
        images={[{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },]}
        isSlider={false}
        group="gallery-grid-triple"
        showSelection={false}
      />
      <GalleryFull
        title={
          <Block_Head
            title="больше 5 картинок"
            subtitle="Галерея"
            headingLevel={2}
          />
        }
        images={[{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },{ src: "/assets/img/1.jpg" },]}
        isSlider={false}
        showSelection={false}
        buttonMore={true}
        group={'gallery-more'}
      />

      <GalleryFull
        link={true}
        title={
          <Block_Head
            title="Слайдер с одной картинкой"
            subtitle="Галерея"
            headingLevel={2}
          />
        }
        images={defaultImages}
        isSlider={true}
        showSelection={false}

      />

    </MainLayout>
  );
}
