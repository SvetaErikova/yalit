export const Input_select = ({ text = "Выберите опцию", options = [], half, ...props }) => {
	return (
		<div className={`form--input ${half}`}>
			<span>{text}</span>
			<div className="form--input_select">
				<select name={"select"} {...props}>
					{options.map((option) => (
						<option value={option.value}>{option.text}</option>
					))}
				</select>
			</div>
		</div>
	);
};
