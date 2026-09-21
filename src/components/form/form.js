let validity_messages = {};
if (typeof ERROR_MESSAGES === "undefined" || ERROR_MESSAGES === null) {
	validity_messages = {
		FORM_ERROR_DEFAULT_FIELD: "Данное поле не заполнено или заполнено неверно",
		FORM_ERROR_MISSING_FIELD: "Не существует поля такого типа",
		FORM_ERROR_FILE_TO_LARGE: "Файл слишком большой",
		FORM_ERROR_FILE_INVALID_FORMAT: "Недопустимый формат файла",
		FORM_ERROR_REQUIRED_FIELD: "Данное поле обязательно к заполнению",
		FORM_ERROR_WRONG_FIELD_DATA: "Проверьте правильность заполнения поля",
	};
} else {
	validity_messages = { ...ERROR_MESSAGES };
}
//
// /* Validate Inputs */

function validateInputs(form) {
	let inputs = form.querySelectorAll('input:not([type="hidden"]):not(.no-validate)');
	let submit_button = form.querySelector('button[type="submit"]');

	inputs.forEach((i) => {
		let parent = i.closest(".form--input");
		if (!parent) {
			return;
		}

		let error_text = parent.querySelector(".form--input_error");

		i.addEventListener("change", () => {
			if (!i.checkValidity()) {
				i.setAttribute("invalid", "");
				i.removeAttribute("valid", "");

				if (parent) {
					parent.classList.add("error");
					parent.classList.remove("no_error");
				}

				if (i.validity.valueMissing) {
					error_text ? (error_text.textContent = validity_messages.FORM_ERROR_REQUIRED_FIELD) : "Данное поле обязательно к заполнению";
				} else if (i.validity.patternMismatch || i.validity.typeMismatch) {
					error_text ? (error_text.textContent = validity_messages.FORM_ERROR_WRONG_FIELD_DATA) : "Проверьте правильность заполнения поля";
				} else if (i.validity.customError) {
					error_text ? (error_text.textContent = validity_messages.FORM_ERROR_FILE_TO_LARGE) : "Файл слишком большой";
				} else {
					error_text ? (error_text.textContent = validity_messages.FORM_ERROR_DEFAULT_FIELD) : "Данное поле не заполнено или заполнено неверно";
				}

				submit_button.setAttribute("disabled", "");
			} else {
				i.removeAttribute("invalid", "");
				i.setAttribute("valid", "");

				submit_button.removeAttribute("disabled");

				if (parent) {
					parent.classList.remove("error");
					parent.classList.add("no_error");
				}
				error_text ? (error_text.textContent = validity_messages.FORM_ERROR_DEFAULT_FIELD) : "Данное поле не заполнено или заполнено неверно";
			}
		});
	});
}

window.addEventListener("load", () => {
	let forms = document.querySelectorAll(".form");

	forms.forEach((form) => {
		// createCustomSelect(form);
		validateInputs(form);
	});
});
