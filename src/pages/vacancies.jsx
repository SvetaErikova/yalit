import {metaPages} from "../shared/meta-pages.js";
import { Filter } from '../components/block/_ui/block--filter/block--filter.jsx';
import { All_card_vacancies } from '../components/_ui/card/all_card.jsx';
import { Block_List } from '../components/block/block_list/block_list.jsx';
import { Button } from '../components/_ui/button/button.jsx';
import {Block_Head} from "../components/block/_ui/block--head/block--head.jsx";
import {Block_pagination} from "../components/block/_ui/block--pagination/block--pagination.jsx";
import HeroLayoutWithBreadcrumbs from '../layouts/HeroLayoutWithBreadcrumbs.jsx';

export default function Home() {
  return <HeroLayoutWithBreadcrumbs meta={metaPages.home} className={'page-vacancies'} >
    <Block_List
      className={'content_vacancies'}
      title={<Block_Head title='Вакансии'/>}
      pagination={
        <Block_pagination page={true}/>
      }
      filter={<>
        <Button type={'outlined'} popup={'popup_for_filters'}>Фильтр</Button>
        <Filter/></>}>
      <All_card_vacancies />
    </Block_List>
  </HeroLayoutWithBreadcrumbs>;
}
