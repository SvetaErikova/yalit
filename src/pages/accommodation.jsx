import { metaPages } from "../shared/meta-pages.js";
import MainLayout from '../layouts/MainLoyout.jsx';


export default function Home() {
  return (
    <MainLayout meta={metaPages.home}>

    </MainLayout>
  );
}
