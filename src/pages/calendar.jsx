import MainLayout from '../layouts/MainLoyout.jsx';
import { metaPages } from '../shared/meta-pages.js';
import { Calendar } from '../components/content/custom/calendar/calendar.jsx';

export default function Home() {
  return <MainLayout meta={metaPages.home} className={'page-article'}>
<Calendar></Calendar>
  </MainLayout>;
}
