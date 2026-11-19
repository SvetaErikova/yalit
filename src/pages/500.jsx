import { Button } from "../components/_ui/button/button.jsx";
import { Block_Head } from "../components/block/_ui/block--head/block--head.jsx";
import { metaPages } from "../shared/meta-pages";
import HeroLayoutWithBreadcrumbs from '../layouts/HeroLayoutWithBreadcrumbs.jsx';

export default function Home() {
	return (
    <HeroLayoutWithBreadcrumbs meta={metaPages.home}>
      <div class="block block_html_code content_error ">
        <div class="block--wrapper">
          <div class="error-img">
            <img src="/assets/img/error/500.svg" alt="" />
          </div>
          <Block_Head  caption={'Нашим серверам тоже нужна пауза, чтобы работать безупречно. Мы уже наводим порядок и скоро всё починим. Попробуйте обновить страницу через пару минут.'} action={
            <Button type={'filled-primary'} color={'neutral'} link={"/"} icon="icon-ic-uniq-arrow-right">на главную</Button>}>
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
