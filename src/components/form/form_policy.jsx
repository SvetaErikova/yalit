export const Form_policy = () => {
	return (
		<div className="form--policy">
			<div className="form--input">
				<label>
					<input name="policy" type="checkbox" value="" required="required" />
					<div className="checkbox"></div>
					<span>
						Я даю согласие на{" "}
						<a href="/" target="_blank" rel="noopener">
							обработку персональных данных
						</a>
					</span>
				</label>
			</div>
		</div>
	);
};
