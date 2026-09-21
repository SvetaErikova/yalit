export const Input_textarea = ({ type, name, placeholder, required = false, text, autocomplete, ...props }) => {
	return (
		<label className="form--input">
			<textarea name={name} placeholder={placeholder} required={required} autoComplete={autocomplete} {...props} />
			<span>{text}</span>
			<div className="form--input_error">Ошибка заполнения</div>
		</label>
	);
};
