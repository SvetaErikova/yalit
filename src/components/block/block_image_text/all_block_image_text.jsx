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

      {/*Цветовые темы*/}
      <Block_image_text
        className={'-dark'}
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('dark')}
        content={demoContent}
      />
      <Block_image_text
        className={'-accent'}
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('-accent')}
        content={demoContent}
      />
      <Block_image_text
        className={'-green'}
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('-green')}
        content={demoContent}
      />
      <Block_image_text
        className={'-primary'}
        images={[
          { src: '../../assets/img/1.jpg' },
        ]}
        title={demoHead('-primary')}
        content={demoContent}
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
