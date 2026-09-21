/* Quantity inputs */
function activateQuantityInputs(block) {
	document.addEventListener("DOMContentLoaded", () => {
		const minInput = block.querySelector(".min-value");
		const maxInput = block.querySelector(".max-value");
		const minRange = block.querySelector(".slider__thumb--left");
		const maxRange = block.querySelector(".slider__thumb--right");
		const range = block.querySelector(".slider__range");
		const errorElement = block.querySelector(".form--input_error");

    console.log(minInput, maxInput, range, errorElement);

		function updateRange() {
			const minVal = parseInt(minRange.value);
			const maxVal = parseInt(maxRange.value);

			if (minVal > maxVal) {
				errorElement.classList.add("show");
				return;
			}

			errorElement.classList.remove("show");

			const minPercent = ((minVal - 15) / (100 - 15)) * 100;
			const maxPercent = ((maxVal - 15) / (100 - 15)) * 100;

			range.style.left = `${minPercent}%`;
			range.style.width = `${maxPercent - minPercent}%`;
		}

		// Синхронизация input number с range
		minInput.addEventListener("input", function () {
			const value = Math.min(parseInt(this.value), parseInt(maxInput.value) - 1);
			minRange.value = value;
			updateRange();
		});

		maxInput.addEventListener("input", function () {
			const value = Math.max(parseInt(this.value), parseInt(minInput.value) + 1);
			maxRange.value = value;
			updateRange();
		});

		// Синхронизация range с input number
		minRange.addEventListener("input", function () {
			const value = Math.min(parseInt(this.value), parseInt(maxRange.value) - 1);
			minInput.value = value;
			updateRange();
		});

		maxRange.addEventListener("input", function () {
			const value = Math.max(parseInt(this.value), parseInt(minRange.value) + 1);
			maxInput.value = value;
			updateRange();
		});

		// Инициализация
		updateRange();
	});
}
activateQuantityInputs(document);
