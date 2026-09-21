import { metaPages } from "../shared/meta-pages.js";
import { Button } from '../components/_ui/button/button.jsx';
import { Block_banner } from '../components/block/block_banner/block_banner.jsx';
import { Block_Head } from '../components/block/_ui/block--head/block--head.jsx';

import HeroWithBreadcrumbs from '../layouts/HeroWithBreadcrumbs.jsx';
import { AccommodationDetails } from '../components/content/accomodation/accommodation-detail.jsx';

export default function Home() {
  return (
    <HeroWithBreadcrumbs meta={metaPages.home} className={"page-accommodation"} >
      <Block_banner
        banners={[
          {
            title: <Block_Head title="Люкс двухкомнатный" caption="Изюминка номера - это панорамные окна и балкон с видом на море, нашу аквазону или ресторан" headingLevel={1}
                               action={<><Button type={'filled'} color={'neutral'} mode={'dark'}>Primary action</Button></>}/>,
            imageSrc: "/assets/img/1.jpg",

          },
        ]}
        className={"block_banner-hero"}
      ></Block_banner>
      <AccommodationDetails></AccommodationDetails>
    </HeroWithBreadcrumbs>
  );
}
