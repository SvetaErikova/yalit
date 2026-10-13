document.querySelectorAll('.block--selection').forEach((selection) => {
	const tabs = [...selection.querySelectorAll(':scope > a')];
	if (!tabs.length) return;

	const move = (tab) => {
		selection.style.setProperty('--mark-x', `${tab.offsetLeft + tab.offsetWidth / 2}px`);
	};

	const setActive = (tab) => {
		tabs.forEach((item) => item.classList.toggle('is_active', item === tab));
		move(tab);
	};

	setActive(tabs.find((tab) => tab.classList.contains('is_active')) || tabs[0]);
	requestAnimationFrame(() => selection.classList.add('is_ready'));

	selection.addEventListener('click', (event) => {
		const tab = event.target.closest('a');
		if (!tab || !tabs.includes(tab)) return;
		setActive(tab);
	});

	const syncMark = () => {
		const current = tabs.find((tab) => tab.classList.contains('is_active'));
		if (current) move(current);
	};

	const resizeObserver = new ResizeObserver(syncMark);
	const classObserver = new MutationObserver(syncMark);
	tabs.forEach((tab) => {
		resizeObserver.observe(tab);
		classObserver.observe(tab, { attributes: true, attributeFilter: ['class'] });
	});
});
