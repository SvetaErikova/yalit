import MainLayout from '../../layouts/MainLoyout.jsx';
import { metaPages } from '../../shared/meta-pages.js';
import { Is_cascade_full } from '../../components/_ui/is_cascade/is_cascade-full.jsx';

export default function Home() {
  return <MainLayout meta={metaPages.home}>
    <div style={'max-width: 700px; margin: auto'}>
      <Is_cascade_full></Is_cascade_full>
    </div>

  </MainLayout>;
}
