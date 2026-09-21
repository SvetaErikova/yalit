import {Button} from "../components/_ui/button/button.jsx";
import {Block_Head} from "../components/block/_ui/block--head/block--head.jsx";
import {metaPages} from "../shared/meta-pages";
import MainLayout from '../layouts/MainLoyout.jsx';

export default function Home() {
  return (
    <MainLayout meta={metaPages.home}>
      <div class="block block_html_code content_error">
        <div class="block--wrapper">
          <img src="/assets/img/404.svg" alt="" />
          <Block_Head title={" Страница не найдена"} caption={'Возможно, она была перемещена или больше не существует. <br</br>Вернитесь на главную страницу и продолжите путешествие по Японскому саду.'}
            action={
              <Button type={'filled-primary'} color={'neutral'} link={"/"} icon="icon-ic-uniq-arrow-right">на главную</Button>}>
          </Block_Head>
        </div>
      </div>
    </MainLayout>
  );
}
