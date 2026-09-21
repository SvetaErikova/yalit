import { Block } from '../../block/block.jsx';
import { Block_Head } from '../../block/_ui/block--head/block--head.jsx';
import { Block_selection } from '../../block/_ui/block--selection/block--selection-comp.jsx';

export const Tariffs = () =>{
  return (
    <Block className={'block_html-code content_tariffs'}
           title={<Block_Head subtitle={'関税'} title={'тарифы'}/>}
            selection={<Block_selection tabs={[
              { label: "входной билет" },
              { label: "комбо 1" },
              { label: "комбо 2" },
              { label: "комбо купели" }]}></Block_selection>}>

    {/*  При переключении табов меняется контент внутри block--content*/}
    <div className={'block--content is_cascade'}>
      <h2>Тариф взрослый</h2>
      <b>Стоимость:</b>
      <ul>
        <li>2 300 ₽ — взрослый</li>
        <li>900 ₽ — детский</li>
      </ul>
      <p>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

    </div>
      <div className={'block--widget'}></div>
    <div className={'block--info is_cascade'}>
      <p>Обратите внимание, что 08:00 — это время начала работы сада. Приобретая билет, вы можете приехать к любому комфортному для вас времени в течение дня.
        Рекомендуем наслаждаться прогулкой по саду в удобной обуви и с головным убором (в летний период).<br></br>
        Для гостей, проживающих на курорте Мрия, посещение сада включено в стоимость проживания.
        Передвижение с колясками по территории сада невозможно в связи с наличием множества ступеней и специфики тропинок.</p>
    </div>
    </Block>
  )
}
