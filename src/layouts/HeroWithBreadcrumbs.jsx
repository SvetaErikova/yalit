import { Footer } from "../components/footer/footer-comp.jsx";
import { Header } from "../components/header/header-comp.jsx";
import { Popups } from "../components/popups/popups.comp.jsx";
import BaseHtml from "../templates/BaseHtml";
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs.jsx';
import { FooterTop } from '../components/footer/footer-top.jsx';

export default function HeroWithBreadcrumbs({ children, meta, className, colorMode = '' }) {
  return (
    <BaseHtml meta={meta}  className={className} colorMode={colorMode}>
      <Header transparent={true} pagePath={meta.path} />
      <main>
        <Breadcrumbs></Breadcrumbs>
        {children}
      </main>
      <Footer></Footer>
      <Popups></Popups>
    </BaseHtml>
  );
}
