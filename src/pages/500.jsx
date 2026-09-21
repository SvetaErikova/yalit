import { Button } from "../components/_ui/button/button.jsx";
import { Block_Head } from "../components/block/_ui/block--head/block--head.jsx";
import HeroLayout from "../layouts/HeroLayout.jsx";
import { metaPages } from "../shared/meta-pages";
import MainLayout from '../layouts/MainLoyout.jsx';

export default function Home() {
	return (
    <MainLayout meta={metaPages.home}>
      <div class="block block_html_code content_error error-500">
        <div class="block--wrapper">
          <img src="/assets/img/500.svg" alt="" />
          <Block_Head subtitle={"500"} title={"нет ответа от сервера"} caption={'Страница временно недоступна.<br> Попробуйте повторить попытку позже.'} action={
            <Button type={'filled-primary'} color={'neutral'} link={"/"} icon="icon-ic-uniq-arrow-right">на главную</Button>}>
          </Block_Head>
        </div>
      </div>
    </MainLayout>
	);
}
