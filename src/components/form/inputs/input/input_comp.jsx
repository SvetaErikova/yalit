/**
 * A labeled form input wrapped in `form--input`.
 * Extra HTML attributes are spread onto the native `<input>` element.
 *
 * @param {object} props - The component props.
 * @param {'text' | 'tel' | 'email' | 'number'} [props.type='text'] - Native input type.
 * @param {string} [props.name] - Input name attribute for form submission.
 * @param {string} [props.placeholder] - Placeholder text shown inside the input.
 * @param {boolean} [props.required=false] - Marks the field as required.
 * @param {string} [props.text] - Label text rendered in `<span>` below the input.
 * @param {string | number} [props.rows] - Passed to the native input element.
 * @param {string | number} [props.maxLength] - Maximum number of characters allowed.
 * @param {string | number}  [props.half]
 * @param {string} [props.autocomplete] - Autocomplete hint (`tel`, `email`, etc.).
 * @param {string} [props.inputMode] - Virtual keyboard hint (`numeric`, `email`, etc.).
 * @param {string | number} [props.min] - Minimum value for numeric inputs.
 * @param {string | number} [props.max] - Maximum value for numeric inputs.
 * @returns {JSX.Element} The labeled input element.
 */

export const Input = ({ type, name, placeholder, required = false, text, rows, maxLength, half, ...props}) => {
	return (
		<label className={`form--input ${half}`}>
			<input name={name} type={type} placeholder={placeholder} required={required} rows={rows} maxLength={maxLength} {...props} />
      {text && (
        <span>{text}</span>
      )}
			<div className="form--input_error">Ошибка заполнения</div>
		</label>
	);
};
