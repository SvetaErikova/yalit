import MainWithoutBreadcrumbs from '../../layouts/MainWithoutBreadcrumbs.jsx';
import { metaPages } from '../../shared/meta-pages.js';
import { Header } from '../../components/header/header-comp.jsx';
import { Contacts } from '../../components/content/contacts/contacts-comp.jsx';
import { Map_tour } from '../../components/map/map_tour.jsx';
import { Map_around } from '../../components/map/map_around.jsx';

export default function Home() {
  return (
    <MainWithoutBreadcrumbs meta={metaPages.home}>
    <div className={'page-contacts'}>
      <Contacts></Contacts>
    </div>
    </MainWithoutBreadcrumbs>
  );
}
