let createCustomSelect = (block) => {
	let select_inputs = block.querySelectorAll(".form--input_select");

	select_inputs.forEach((i) => {
		let hidden_select = i.querySelector("select");

		let select = document.createElement("div");
		select.classList.add("select");
		i.appendChild(select);
		select.tabIndex = "0";

		let select_button = document.createElement("div");
		select_button.classList.add("select--button");
		let select_button_text = document.createElement("p");
		select_button.appendChild(select_button_text);
		select.appendChild(select_button);

		let select_option_list_container = document.createElement("div");
		select_option_list_container.classList.add("select--option_wrapper");
		select.appendChild(select_option_list_container);

		let select_option_list = document.createElement("div");
		select_option_list.classList.add("select--option_list");
		select_option_list_container.appendChild(select_option_list);

		let options = i.querySelectorAll("option");

		options.forEach((opt) => {
			let select_option = document.createElement("div");
			select_option.classList.add("select--option");
			select_option.dataset.value = opt.value;
			select_option.textContent = opt.textContent;
			select_option.dataset.disabled = opt.disabled;
			select_option_list.appendChild(select_option);
		});

		let select_options = i.querySelectorAll(".select--option");

		select_options.forEach((option, index) => {
			option.addEventListener("click", () => {
				select_button_text.textContent = option.textContent;

				select_options.forEach((o) => {
					o !== option ? o.classList.remove("is_selected") : o.classList.add("is_selected");
				});
				select_option_list_container.classList.remove("is_opened");
				options.forEach((op, ind) => {
					ind === index ? op.setAttribute("selected", "") : op.removeAttribute("selected");
				});
				hidden_select.dispatchEvent(new Event("change"));
			});
		});

		let preselected_option = hidden_select.querySelector("option[selected]") ? hidden_select.querySelector("option[selected]") : select_options[0];
		select_button_text.textContent = preselected_option.textContent;
		hidden_select.value = preselected_option.value;

		select_button.addEventListener("click", () => {
			select_option_list_container.classList.toggle("is_opened");
		});

		select.addEventListener("blur", (event) => {
			select_option_list_container.classList.remove("is_opened");
		});
	});
};

createCustomSelect(document);
