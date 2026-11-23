let bindAccordion = (accordion_items) => {
	accordion_items.forEach((item) => {
		let accordion_button = item.querySelector(".accordion--button");
		if (!accordion_button) return;

		accordion_button.addEventListener("click", () => {
			accordion_items.forEach((it) => {
				it !== item ? it.classList.remove("is_open") : it.classList.toggle("is_open");
			});
		});
	});
};

let initAccordionItems = (block) => {
	block.querySelectorAll(".is_cascade--accordion").forEach((cascade) => {
		let accordion_items = cascade.querySelectorAll(".accordion");
		bindAccordion(accordion_items);
		if (!accordion_items.length) return;
		accordion_items[0].classList.add("is_open");
	});

	let outside = [];
	block.querySelectorAll(".accordion").forEach((item) => {
		if (item.closest(".is_cascade--accordion")) return;
		outside.push(item);
	});
	bindAccordion(outside);
};

initAccordionItems(document);
