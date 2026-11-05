import { metaPages } from '../../shared/meta-pages';
import HeroLayoutWithBreadcrumbs from '../../layouts/HeroLayoutWithBreadcrumbs.jsx';

import { InfoClip } from '../../components/content/custom/info-clip/info-clip-comp.jsx';
import { HotelGroupComp } from '../../components/content/custom/hotel-group/hotel-group-comp.jsx';
import { AboutMedia } from '../../components/content/custom/about-media/about-media.jsx';
import { InfoMedia } from '../../components/content/custom/info-media/info-media.jsx';

export default function Home() {

  return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.home}>

      <AboutMedia theme={'accent'}></AboutMedia>
      <InfoMedia></InfoMedia>
      <InfoClip></InfoClip>
      <HotelGroupComp></HotelGroupComp>
    </HeroLayoutWithBreadcrumbs>
  );
}
