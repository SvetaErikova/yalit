import { Button } from "../../components/_ui/button/button.jsx";

import MainLayout from "../../layouts/MainLoyout.jsx";
import { metaPages } from "../../shared/meta-pages";

export default function Home() {
	return (
		<MainLayout meta={metaPages.home} >
      <div class="block">
        <div className="block--wrapper" style={{ margin: "2em" }}>
          <h1 className='f-h1'>Кнопки</h1>

          <h2 className='f-h3'>Base (default)</h2>
          <div className="ui_grid-5">
            <Button color="neutral" type="filled-primary">neutral filled-primary</Button>
            <Button color="neutral" type="filled-secondary">neutral filled-secondary</Button>
            <Button color="neutral" type="outlined">neutral outlined</Button>
            <Button color="neutral" type="link">neutral link</Button>
            <Button color="neutral" type="flat">neutral flat</Button>

            <Button color="brand" type="filled-primary">brand filled-primary</Button>
            <Button color="brand" type="filled-secondary">brand filled-secondary</Button>
            <Button color="brand" type="outlined">brand outlined</Button>
            <Button color="brand" type="link">brand link</Button>
            <Button color="brand" type="flat">brand flat</Button>
          </div>
        </div>

        <div className="block--wrapper page-fest" style={{ margin: "2em" }}>
          <h1 className='f-h1'>Кнопки</h1>

          <h2 className='f-h3'>Base (default)</h2>
          <div className="ui_grid-5">
            <Button color="neutral" type="filled-primary">neutral filled-primary</Button>
            <Button color="neutral" type="filled-secondary">neutral filled-secondary</Button>
            <Button color="neutral" type="outlined">neutral outlined</Button>
            <Button color="neutral" type="link">neutral link</Button>
            <Button color="neutral" type="flat">neutral flat</Button>

            <Button color="brand" type="filled-primary">brand filled-primary</Button>
            <Button color="brand" type="filled-secondary">brand filled-secondary</Button>
            <Button color="brand" type="outlined">brand outlined</Button>
            <Button color="brand" type="link">brand link</Button>
            <Button color="brand" type="flat">brand flat</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
