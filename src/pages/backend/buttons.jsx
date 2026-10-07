import { Button } from "../../components/_ui/button/button.jsx";

import HeroLayoutWithBreadcrumbs from "../../layouts/HeroLayoutWithBreadcrumbs.jsx";
import { metaPages } from "../../shared/meta-pages";

export default function Home() {
	return (
		<HeroLayoutWithBreadcrumbs meta={metaPages.home} >
      <div class="block">
        <div className="block--wrapper" style={{ padding: "2em" }}>
          <div className="ui_grid-5">
            <Button  type="filled-primary"> filled-primary</Button>
            <Button  type="filled-secondary"> filled-secondary</Button>
            <Button  type="filled-accent"> filled-accent</Button>
            <Button  type="outlined"> outlined</Button>
            <Button  type="flat">neutral flat</Button>
          </div>
        </div>
        <div className="block--wrapper -dark" style={{ padding: "2em", background: "var(--bg-primary)" }}>
          <div className="ui_grid-5">
            <Button  type="filled-primary"> filled-primary</Button>
            <Button  type="filled-secondary"> filled-secondary</Button>
            <Button  type="filled-accent"> filled-accent</Button>
            <Button  type="outlined"> outlined</Button>
            <Button  type="flat">neutral flat</Button>
          </div>
        </div>
        <div className="block--wrapper -green" style={{ padding: "2em", background: "var(--bg-primary)" }}>
          <div className="ui_grid-5">
            <Button  type="filled-primary"> filled-primary</Button>
            <Button  type="filled-secondary"> filled-secondary</Button>
            <Button  type="filled-accent"> filled-accent</Button>
            <Button  type="outlined"> outlined</Button>
            <Button  type="flat">neutral flat</Button>
          </div>
        </div>
        <div className="block--wrapper -accent" style={{ padding: "2em", background: "var(--bg-primary)" }}>
          <div className="ui_grid-5">
            <Button  type="filled-primary"> filled-primary</Button>
            <Button  type="filled-secondary"> filled-secondary</Button>
            <Button  type="filled-accent"> filled-accent</Button>
            <Button  type="outlined"> outlined</Button>
            <Button  type="flat">neutral flat</Button>
          </div>
        </div>

      </div>
    </HeroLayoutWithBreadcrumbs>
  );
}
