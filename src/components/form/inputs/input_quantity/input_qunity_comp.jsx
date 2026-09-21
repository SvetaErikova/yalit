export const Input_qunity = () => {
	return (
		<div className="form--input">
			<span>Количество</span>
			<div className="quantity-inputs">
				<div className="quantity-range-inputs">
					<div className="quantity-input-group">
						<span className="quantity-label">от</span>
						<input type="number" className="quantity-input min-value" value="15" min="15" max="100" />
					</div>
					<div className="quantity-input-group">
						<span className="quantity-label">до</span>
						<input type="number" className="quantity-input max-value" value="100" min="15" max="100" />
					</div>
				</div>

				<div className="slider">
					<div className="slider__track"></div>
					<div className="slider__range"></div>

					<input type="range" className="slider__thumb slider__thumb--left" min="15" max="100" value="15" />

					<input type="range" className="slider__thumb slider__thumb--right" min="15" max="100" value="100" />
				</div>

				<div className="quantity-range-labels">
					<span>15</span>
					<span>100</span>
				</div>
			</div>
			<div className="form--input_error">Ошибка заполнения</div>
		</div>
	);
};
