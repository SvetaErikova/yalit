import HeroLayoutWithBreadcrumbs from "../../layouts/HeroLayoutWithBreadcrumbs.jsx";
import { metaPages } from "../../shared/meta-pages";
import { GalleryFull } from '../../components/gallery/galleryFull.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';

const card = (title) => ({
  title,
  images: [
    { src: '/assets/img/1.jpg' },
    { src: '/assets/img/2.jpg' },
    { src: '/assets/img/1.jpg' },
  ],
});

export default function Home() {
  return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.home}>
      <GalleryFull
        title={
          <Block_Head
            title="Фотогалерея"
            headingLevel={2}
          />
        }
        galleries={[
          {
            title: 'Номера',
            group: 'gallery-rooms',
            cards: [
              card('Номер первой категории с видом на сад'),
              card('Номер первой категории с видом на Волгу'),
              card('Номер первой категории с двумя кроватями с видом на сад'),
              card('Джуниор сюит с видом на сад'),
              card('Номер первой категории с видом на Волгу'),
              card('Люкс с панорамным видом на Волгу'),
              card('Номер первой категории с видом на сад'),
              card('Джуниор сюит с видом на сад'),
            ],
          },
          {
            title: 'Рестораны',
            group: 'gallery-restaurants',
            cards: [
              card('Основной ресторан'),
              card('Ресторан «Буффет»'),
            ],
          },
          {
            title: 'Развлечения',
            group: 'gallery-entertainment',
            cards: [
              card('Бильярдная комната'),
              card('Детская комната'),
              card('Караоке-бар'),
              card('Игровой зал виртуальной реальности'),
            ],
          },
        ]}
      />
    </HeroLayoutWithBreadcrumbs>
  );
}
