export const Breadcrumbs = () => {
	return (
		<div class="breadcrumbs" itemscope="" itemtype="https://schema.org/BreadcrumbList">
			<a itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem" href="/riders-lodge/">
				<span itemProp="name">главная</span>
			</a>
			<a itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem" href="/riders-lodge/offers">
				<span itemProp="name">форматы посещения</span>
			</a>
      <a itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem" href="/riders-lodge/offers">
        <span itemProp="name">входной билет</span>
      </a>
		</div>
	);
};
