import { metaPages } from '../../shared/meta-pages';
import HeroLayoutWithBreadcrumbs from '../../layouts/HeroLayoutWithBreadcrumbs.jsx';

import { InfoClip } from '../../components/content/custom/info-clip/info-clip-comp.jsx';
import { HotelGroupComp } from '../../components/content/custom/hotel-group/hotel-group-comp.jsx';
import { AboutMedia } from '../../components/content/custom/about-media/about-media.jsx';
import { InfoMedia } from '../../components/content/custom/info-media/info-media.jsx';
import { InfoSlider } from '../../components/content/custom/info-slider/info-slider.jsx';
import { Block } from '../../components/block/block.jsx';
import { Block_Head } from '../../components/block/_ui/block--head/block--head.jsx';

export default function Home() {

  return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.home}>
      <Block className={'-decor -theme-green -centered'}>
        <Block_Head title={'отзывы о нас'}></Block_Head>
        <div class="is_cascade">
          <h3>тут будут отзывы видстер</h3>
        </div>
      </Block>
      <InfoSlider></InfoSlider>
      <AboutMedia theme={'accent'}></AboutMedia>
      <InfoMedia></InfoMedia>
      <InfoClip></InfoClip>
      <HotelGroupComp></HotelGroupComp>
    </HeroLayoutWithBreadcrumbs>
  );
}
