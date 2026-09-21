import {Button} from "../_ui/button/button.jsx";

export const Form_short = () => {
	return (
		<form className="form">
			<input type="hidden" value="" name="fields[form]" />
			<input type="hidden" value="" />
			<h3 className="form--title">Отправить запрос</h3>
			<p className="form--subtitle">Мы поможем вам выбрать шале и ответим на любые ваши вопросы</p>
			<fieldset>
				<label className="form--input">
					<input
						name=""
						type="text"
						placeholder="Иванов Иван Иванович"
						required="required"
						autoComplete="autocomplete"
					/>
					<span>Ваше имя</span>
					<div className="form--input_error">Ошибка заполнения</div>
				</label>
				<label className="form--input">
					<input
						name=""
						type="tel"
						placeholder="+7 999 999-99-99"
						inputMode="numeric"
						autoComplete="tel"
						required="required"
					/>
					<span>Телефон</span>
					<div className="form--input_error">Ошибка заполнения</div>
				</label>
				<label className="form--input">
					<input
						name=""
						type="email"
						placeholder="example@imperial.ru"
						autoComplete="email"
						required="required"
					/>
					<span>Email</span>
					<div className="form--input_error">Ошибка заполнения</div>
				</label>
				<label className="form--input">
					<textarea
						name=""
						placeholder="Введите комментарий"
						rows="4"
						maxLength="1000"
					></textarea>
					<span>Сообщение</span>
					<div className="form--input_error">Ошибка заполнения</div>
				</label>
				<div className="form--policy">
					<div className="form--input">
						<label>
							<input name="" type="checkbox" value="" required="required" />
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
				<div className="form--button">
          <Button type={'filled-primary'} color={'neutral'} htmlType="submit" disabled="disabled" icon={'icon-ic-uniq-arrow-right'}>Отправить</Button>

        </div>
			</fieldset>
		</form>
	);
};
