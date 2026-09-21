import { Button } from '../../_ui/button/button.jsx';
import { Block_Head } from '../_ui/block--head/block--head.jsx';
import { Block_image_text } from './block_image_text.jsx';
import { Input } from '../../form/inputs/input/input_comp.jsx';
import { Form_policy } from '../../form/form_policy.jsx';
import { Input_select } from '../../form/inputs/input_select/input_select_comp.jsx';
import { Input_textarea } from '../../form/inputs/input_textarea/input_textarea_comp.jsx';

export const All_block_image_text = () => {
  const demoContent = (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloribus!</p>
      <p>Lorem ipsum dolor sit amet consectetur. Pellentesque eleifend mauris amet ullamcorper mi dui at. </p>
      <div class="block--actions">
        <Button color={'neutral'} type={'filled-primary'}>Button text</Button>
        <Button color={'neutral'} type={'outlined'}>Button text</Button>
      </div>
    </>
  );

  const demoActions = (
    <>
      <Button type={'filled-primary'} color={'brand'}>Кнопка 1</Button>
      <Button type={'filled-secondary'} color={'brand'}>Кнопка 2</Button>
    </>
  );

  const demoHead = (title) => (
    <Block_Head
      title={title || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, repellat?'}
      subtitle="Subheader"
      caption="Pretium nisi aenean vitae tristique pulvinar vestibulum habitasse velit vitae. Amet et aliquet arcu leo."
      headingLevel={2}
      action={demoActions}
    />
  );

  return (
    <>
      {/* Без изображения */}
      <Block_image_text title={demoHead('Картинка текст без картинки')} content={demoContent} />
      <Block_image_text title={demoHead('Картинка текст без картинки Ревер&shy;сивный')} content={demoContent} reversed />

      {/* Базовые варианты */}
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Базовый блок')}
        content={demoContent}
      />

      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Ревер&shy;сивный блок')}
        content={demoContent}
        reversed
      />
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Картинка во всю высоту контента')}
        content={demoContent}
        ratioFill='true'
      />

      {/* Варианты соотношения картинки */}
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Соотношение картинки 16:9')}
        content={demoContent}
        className="block_image_text_ar-16-9"
      />
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Соотношение картинки 4:3')}
        content={demoContent}
        className="block_image_text_ar-4-3"
      />
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Соотношение картинки 3:4')}
        content={demoContent}
        className="block_image_text_ar-3-4"
      />
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Соотношение картинки 1:1')}
        content={demoContent}
        className="block_image_text_ar-1-1"
      />


      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Центрирование контента')}
        content={demoContent}
        centered
      />

      <Block_image_text
        images={[
          { src: '../../assets/img/img-text-form.png' },
        ]}
        content={
          <form className="form">
            <input type="hidden" value="" name="fields[form]" />
            <input type="hidden" value="" />
            <h3 className="form--title">Заявка на услугу</h3>
            <fieldset>
              <Input type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} text={"Ваше имя"} autocomplete={"autocomplete"}></Input>
              <Input type={"tel"} name={"tel"} placeholder={"+7 999 999-99-99"} required={true} text={"Телефон"} autocomplete={"tel"} inputMode="numeric"></Input>

              <Form_policy></Form_policy>
              <div className="form--button">
                <Button type={'filled'} color={'primary'} htmlType="submit" disabled="disabled" icon={'icon-ic-uniq-arrow-right'}>Отправить</Button>
              </div>
            </fieldset>
          </form>
        }
        centered
      />
      <Block_image_text
        images={[
          { src: '../../assets/img/img-text-form.png' },
        ]}
        content={
          <form className="form">
            <input type="hidden" value="" name="fields[form]" />
            <input type="hidden" value="" />
            <h3 className="form--title">Заявка на услугу</h3>
            <fieldset>
              <Input_select
                half={'half'}
                text={"Тип экскурсии"}
                options={[
                  { value: "Сухой сад камней", text: "Сухой сад камней" },
                  { value: "Выбранная опция 2", text: "Выбранная опция 1" },
                  { value: "Выбранная опция 3", text: "Выбранная опция 3" },
                ]}
              ></Input_select>
              <Input half={'half'} type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} text={"Ваше имя"} autocomplete={"autocomplete"}></Input>
              <Input half={'half'} type={"tel"} name={"tel"} placeholder={"+7 999 999-99-99"} required={true} text={"Телефон"} autocomplete={"tel"} inputMode="numeric"></Input>
              <Input half={'half'} type={"email"} name={"email"} placeholder={"example@imperial.ru"} required={true} text={"Email"} autocomplete={"email"}></Input>
              <Form_policy></Form_policy>
              <div className="form--button">
                <Button type={'filled'} color={'primary'} htmlType="submit" disabled="disabled" icon={'icon-ic-uniq-arrow-right'}>Отправить</Button>
              </div>
            </fieldset>
          </form>
        }
        centered
      />
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        ratioFill={true}
        content={
          <form className="form">
            <input type="hidden" value="" name="fields[form]" />
            <input type="hidden" value="" />
            <h3 className="form--title">Заявка на услугу</h3>
            <fieldset>
              <Input_select
                text={"Тип экскурсии"}
                options={[
                  { value: "Сухой сад камней", text: "Сухой сад камней" },
                  { value: "Выбранная опция 2", text: "Выбранная опция 1" },
                  { value: "Выбранная опция 3", text: "Выбранная опция 3" },
                ]}
              ></Input_select>
              <Input type={"text"} name={"name"} placeholder={"Иванов Иван Иванович"} required={true} text={"Ваше имя"} autocomplete={"autocomplete"}></Input>
              <Input type={"tel"} name={"tel"} placeholder={"+7 999 999-99-99"} required={true} text={"Телефон"} autocomplete={"tel"} inputMode="numeric"></Input>
              <Input type={"email"} name={"email"} placeholder={"example@imperial.ru"} required={true} text={"Email"} autocomplete={"email"}></Input>
              <Input_textarea text={"комментарий"} name={"comments"} placeholder={"Введите комментарий"} rows={"4"} maxLength={"1000"}></Input_textarea>

              <Form_policy></Form_policy>
              <div className="form--button">
                <Button type={'filled'} color={'primary'} htmlType="submit" disabled="disabled" icon={'icon-ic-uniq-arrow-right'}>Отправить</Button>
              </div>
            </fieldset>
          </form>
        }

      />

      {/* С видео */}
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg', video: '../../assets/video/@lepragram.mp4' },
        ]}
        title={demoHead('Блок с видео')}
        content={demoContent}
      />

      {/* Слайдер */}
      <Block_image_text
        images={[
          { src: '../../assets/img/1.jpg', video: '../../assets/video/@lepragram.mp4' },
          { src: '../../assets/img/1.jpg' },
          { src: '../../assets/img/footer.jpg' },
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('Блок со слайдером')}
        content={demoContent}
      />
    </>
  );
};
