export const Input_checks = ({ type, name, title, input = [], ...props }) => {
	return (
		<div className="form--input">
			<span>{title}</span>
			{input.map((i) => (
				<label>
					<input type={type} value={i.text} name={name} {...props} />
					<div className={name}></div>
					<span>{i.text}</span>
				</label>
			))}
			<div className="form--input_error">Ошибка заполнения</div>
		</div>
	);
};
