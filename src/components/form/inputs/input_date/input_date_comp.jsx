export const Input_date = ({
  text,
  name = '',
  placeholder = '',
  min = '',
  max = '',
  lang = 'ru-RU',
  range = false,
  applyBase,
  applySubmit,
  ...props
}) => {
  return (
    <label className="form--input">
      <div className="form--input_date">
        <input
          data-airpicker={range ? 'range' : 'data-airpicker'}
          data-min={min}
          data-max={max}
          data-lang={lang}
          data-apply_base={applyBase}
          data-apply_submit={applySubmit}
          name={name}
          type="text"
          placeholder={placeholder}
          {...props}
        />
      </div>
      {text && <span>{text}</span>}
      <div className="form--input_error">Ошибка заполнения</div>
    </label>
  );
};
