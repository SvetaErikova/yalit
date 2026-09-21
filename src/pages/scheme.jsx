import MainLayout from "../layouts/MainLoyout.jsx";
import { metaPages } from "../shared/meta-pages";
import { Scheme } from '../components/scheme/scheme.jsx';

export default function Home() {
  return (
    <MainLayout meta={metaPages.scheme}>
      <Scheme></Scheme>
    </MainLayout>
  );
}
