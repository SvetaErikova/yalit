import {Button} from "../components/_ui/button/button.jsx";
import {Block_Head} from "../components/block/_ui/block--head/block--head.jsx";
import {metaPages} from "../shared/meta-pages";
import HeroLayoutWithBreadcrumbs from '../layouts/HeroLayoutWithBreadcrumbs.jsx';

export default function Home() {
  return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.home}>
      <div class="block block_html_code content_error">
        <div class="block--wrapper">
          <div class="error-img">
            <img src="/assets/img/error/404.svg" alt="" />
          </div>
          <Block_Head title={"УПС!"} caption={'Вы случайно забрели в закрытый уголок парка или открыли не ту дверь в отеле, но мы радом и поможем вернуться.'}
            action={
              <Button type={'filled-accent'}  link={"/"} >на главную</Button>}>
          </Block_Head>
          <div class="button-wrapper">
            <Button link={'/'} type={'link'}>Кол гали</Button>
            <Button link={'/'} type={'link'}>ногай</Button>
            <Button link={'/'} type={'link'}>ак барс резорт</Button>
            <Button link={'/'} type={'link'}>миллениум панорама</Button>
          </div>
        </div>
      </div>
    </HeroLayoutWithBreadcrumbs>
  );
}
