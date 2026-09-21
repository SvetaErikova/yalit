export const Input_file = ({ hint, accept, maxsize, title }) => {
	return (
		<div className="form--input">
			<label className="form--input_file">
				<p>
					Перетащите или <span>добавьте файл</span>
				</p>
				<div className="form--input_file_hint">{hint}</div>
				<input className="js-input_file" name="" type="file" required="required" accept={accept} data-maxsize={maxsize} multiple="multiple" />
			</label>
			<div className="form--input_file--items"></div>
			<div className="form--input_error">Ошибка заполнения</div>
			<span>{title}</span>
		</div>
	);
};
