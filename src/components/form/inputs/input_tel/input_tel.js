let activateTelInput = () => {
	Inputmask({
		mask: "+7 999 999 99 99",
		inputmode: "numeric",
		showMaskOnFocus: true,
		clearIncomplete: true,
		clearMaskOnLostFocus: true,
		greedy: false,
		nullable: true,
	}).mask("input[type='tel']");
};

activateTelInput();
