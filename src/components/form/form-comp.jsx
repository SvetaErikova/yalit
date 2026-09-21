import { Form_policy } from "./form_policy.jsx";
import { Input } from "./inputs/input/input_comp.jsx";
import { Input_checks } from "./inputs/input_checks/input_checks-comp.jsx";
import { Input_date } from "./inputs/input_date/input_date_comp.jsx";
import { Input_file } from "./inputs/input_file/input_file_comp.jsx";
import { Input_qunity } from "./inputs/input_quantity/input_qunity_comp.jsx";
import { Input_select } from "./inputs/input_select/input_select_comp.jsx";
import { Input_textarea } from "./inputs/input_textarea/input_textarea_comp.jsx";
import { Button } from '../_ui/button/button.jsx';

export const Form = () => {
	return (
		<form class="form">
			<input type="hidden" value="" name="fields[form]" />
			<input type="hidden" value="" />
			<h3 class="form--title">Оставить заявку</h3>
			<p class="form--subtitle">Наш менеджер свяжется с вами в течение одной рабочей недели после отправления заявки</p>
			<fieldset>
        <Input half={'half'} type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} text={"Ваше имя"} autocomplete={"autocomplete"}></Input>
        <Input half={'half'} type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} text={"Ваше имя"} autocomplete={"autocomplete"}></Input>

				<Input type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} text={"Ваше имя"} autocomplete={"autocomplete"}></Input>
				<Input type={"tel"} name={"tel"} placeholder={"+7 999 999-99-99"} required={true} text={"Телефон"} autocomplete={"tel"} inputMode="numeric"></Input>
				<Input type={"email"} name={"email"} placeholder={"example@imperial.ru"} required={true} text={"Email"} autocomplete={"email"}></Input>
				<Input type={"number"} name={"number"} placeholder={"0"} required={true} text={"Количество"} inputMode="numeric" min="1" max="123"></Input>
				<Input_textarea text={"комментарий"} name={"comments"} placeholder={"Введите комментарий"} rows={"4"} maxLength={"1000"}></Input_textarea>

				<Input_date
					text={"Дата Aipicker 1"}
					name={""}
					min={""}
					max={"2026-10-12"}
					lang={"ru-RU"}
				/>
				<Input_date
					text={"Дата Aipicker 2"}
					name={""}
					min={"2026-06-08"}
					max={"2027-10-27"}
					lang={"ru-RU"}
					range={true}
					applyBase={"Применить"}
					applySubmit={"Выбрать "}
				/>
				<Input_select
					text={"заголовок"}
					options={[
						{ value: "Выбранная опция 1", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam earum minus totam! Porro, vel." },
						{ value: "Выбранная опция 2", text: "Выбранная опция 1" },
						{ value: "Выбранная опция 3", text: "Выбранная опция 3" },
					]}
				></Input_select>
				<Input_checks
					type={"checkbox"}
					name={"checkbox"}
					title={"Заголовок группы чекбоксов"}
					input={[{ text: "Описание конкретного итема 1" }, { text: "Описание конкретного итема 2" }]}
				></Input_checks>
				<Input_checks
					type={"radio"}
					name={"radio"}
					title={"Заголовок группы радио кнопок"}
					input={[{ text: "Значение пункта радио кнопки 1" }, { text: "Значение пункта радио кнопки 2" }]}
				></Input_checks>
				<Input_checks type={"checkbox"} name={"toggle"} title={"Тоггл"} input={[{ text: "Описание значения тоггла" }]}></Input_checks>
				{/*<Input_file title={"Резюме"} hint={".doc, .pdf, .txt до 5MB"} accept={"application/pdf,application/doc"} maxsize={(1024*1024) * 5}></Input_file>*/}
				{/*<Input_file title={"Поле для загрузки картинок"} hint={".jpeg, .png, .jpg до 2MB"} accept={"image/jpeg,image/png,image/jpg"} maxsize={(1024*1024) * 2}></Input_file>*/}
				{/*<Input_qunity></Input_qunity>*/}
				<Form_policy></Form_policy>
				<div class="form--button">
          <Button type={'filled-primary'} color={'neutral'} htmlType="submit" disabled="disabled" icon={'icon-ic-uniq-arrow-right'}>Отправить</Button>
				</div>
			</fieldset>
		</form>
	);
};
